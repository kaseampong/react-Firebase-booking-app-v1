import { history } from '../routers/AppRouter';
import database from '../firebase/firebase';
import {startSetPaymentDetails} from './payment';


export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  user
});

export const loginFail = (message) => ({
  type: 'LOGIN_FAIL',
  message
});

export const logout = () => ({
  type: 'LOGOUT'
});  


export const signUpFail = (message) => ({
  type: 'SIGN_UP_FAIL',
  message
});


export const signUpSuccess = (message) => ({
  type: 'SIGN_UP_SUCCESS',
  message
});


export const resetMessage = () => ({
  type: 'RESET_MESSAGE'
});



export const resetUser = () => ({
  type: 'RESET_USER'
});



export const resetBooking = () => ({
  type: 'RESET_BOOKING'
});



export const resetHostel = () => ({
  type: 'RESET_HOSTEL'
});


export const startSignUp = (userData = {}) => {
  return (dispatch) => {
    let {
      adm = '',
      password = '',
      date='',
      time='',
      gender=''
    } = userData;

    return database.ref(`users`).orderByChild('adm').equalTo(adm).once('value').then((snapshot) => {
         if (snapshot.exists()) {
             const message= `Registration number is already taken.`;
             dispatch(signUpFail(message));
         } else {

         //sign up user
         return database.ref(`users`).push(userData).then((ref) => {
          const message = `You have registered successfully.`;
          // dispatch(signUpSuccess(message));
          dispatch(resetMessage());
          dispatch(startLogin({adm,password}));
        });
    }});
  };
};

export const startLogin = (userData = {}) => {
  return (dispatch, getState) => {
    let {
      adm = '',
      password = ''
    } = userData;
    
    return database.ref(`users`).orderByChild('adm').equalTo(adm).once('value').then((snapshot) => {
         if (snapshot.exists()) {
             let user = {};
          // validate password
          snapshot.forEach((childSnapshot) => {
            user ={
              uid:childSnapshot.key,
              ...childSnapshot.val()
            }
            
          });
          if (user.password == password) {
            sessionStorage.setItem("uid", user.uid);
            const userData ={
              adm:user.adm,
              uid:user.uid,
              gender:user.gender,
              term:"SEMESTER 1 2019-2020",
              academicYear:'2019-2020'
            }
            dispatch(loginSuccess(userData));
            dispatch(startSetPaymentDetails()).then(()=>{
              history.push('/dashboard');
            });
          } else {
            const message = `Incorrect registration number or password.`;
            dispatch(loginFail(message));
          }
  
         } else {
          const message = `Incorrect registration number or password.`;
          dispatch(loginFail(message));

    }});
  };
};


export const startLogout = () => {
  return (dispatch) => {
       sessionStorage.clear();
       dispatch(logout());
       history.push('/');
  };
};


