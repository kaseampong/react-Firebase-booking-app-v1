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


export const resetAuth = () => ({
  type: 'RESET_AUTH'
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
    const {
      adm = '',
      password = '',
      date='',
      time='',
      gender=''
    } = userData;

    return database.ref(`users`).orderByChild('adm').equalTo(adm).once('value').then((snapshot) => {
         if (snapshot.exists()) {
             let message= `Registration number is already taken.`;
             dispatch(signUpFail(message));
         } else {

         //sign up user
         return database.ref(`users`).push(userData).then((ref) => {
          let message = `You have registered successfully.`;
          dispatch(signUpSuccess(message));
        });
    }});
  };
};

export const startLogin = (userData = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    const {
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
            dispatch(loginSuccess({adm:user.adm,uid:user.uid,gender:user.gender}));
            dispatch(resetAuth());
            dispatch(startSetPaymentDetails());
            history.push('/dashboard');
          } else {
            let message = `Incorrect registration number or password.`;
            dispatch(loginFail(message));
          }
  
         } else {
          let message = `Incorrect registration number or password.`;
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


