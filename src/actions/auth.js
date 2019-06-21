import AppRouter, { history } from '../routers/AppRouter';
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

export const resetSuccess = (message) => ({
  type: 'RESET_PASSWORD_SUCCESS',
  message
});

export const resetFail = (message) => ({
  type: 'RESET_PASSWORD_FAIL',
  message
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



export const resetRooms = () => ({
  type: 'RESET_ROOMS'
});


export const startSignUp = (userData = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    const {
      regNo = '',
      password = '',
      email = '',
      firstName = '',
      lastName='',
      createdDate='',
      createdTime='',
      userGender=''

    } = userData;

    return database.ref(`users`).orderByChild('regNo').equalTo(regNo).limitToFirst(1).once('value').then((snapshot) => {
         if (snapshot.exists()) {
             let message= `${regNo} already exists in the system`;
             dispatch(signUpFail(message));
         } else {

         //sign up user
         return database.ref(`users`).push(userData).then((ref) => {
          let message = `You have registered successfully`;
          dispatch(signUpSuccess(message));
        });
    }});
  };
};

export const startLogin = (userData = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    const {
      regNo = '',
      password = ''
    } = userData;
    
    return database.ref(`users`).orderByChild('regNo').equalTo(regNo).limitToFirst(1).once('value').then((snapshot) => {
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
            dispatch(loginSuccess({regNo:user.regNo,uid:user.uid,userGender:user.userGender,academicYear:'2018/2019'}));
            dispatch(resetAuth());
            dispatch(startSetPaymentDetails());
            history.push('/dashboard');
          } else {
            let message = `Wrong password. `;
            dispatch(loginFail(message));
          }
  
         } else {
          let message = `User does not exist. `;
          dispatch(loginFail(message));

    }});
  };
};


export const startLogout = () => {
  return (dispatch, getState) => {
       sessionStorage.clear();
       dispatch(logout());
       history.push('/');
  };
};


