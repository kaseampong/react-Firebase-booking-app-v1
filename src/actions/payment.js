import database from '../firebase/firebase';
import AppRouter, { history } from '../routers/AppRouter';


export const setPaymentDetails = (details) => ({
  type: 'SET_PAYMENT_DETAILS',
  details
});


// SUCCESS_PAYMENT
export const successPayment = (message) => ({
  type: 'SUCCESS_PAYMENT',
  message
});


// FAILED_PAYMENT
export const failedPayment = (message) => ({
  type: 'FAILED_PAYMENT',
  message
});


// SET_PAYMENT_DETAILS
export const startSetPaymentDetails = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const academicYear = getState().auth.academicYear;
    const details = `${academicYear}_${uid}`;

    return database.ref(`payments`).orderByChild('academicYear').equalTo(details).once('value').then((snapshot) => {
      if (snapshot.exists()) {
        let user = {};

        snapshot.forEach((childSnapshot) => {
          user = {
            paymentId: childSnapshot.key,
            ...childSnapshot.val()
          }
        });
        dispatch(setPaymentDetails(user));

      } else {
        const user = {};
        dispatch(setPaymentDetails(user));
      }
    });
  };
};




// MAKE PAYMENT
export const startMakePayment = (userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const academicYear = getState().auth.academicYear;
    const regNo = getState().auth.regNo;

    const {
      amountPaid = 0,
        paymentDate = '',
        paymentTime = ''
    } = userData;

    const details = `${academicYear}_${uid}`;

    //check the if user has already made payment
    return database.ref(`payments`).orderByChild('academicYear').equalTo(details).once('value').then((snapshot) => {

      if (snapshot.exists()) {
        let user = {};
        snapshot.forEach((childSnapshot) => {
          user = {
            ...user,
            paymentId: childSnapshot.key,
            ...childSnapshot.val(),
          }

        });
        //check the amount the user has paid
        if (user.amountPaid >= 3500) {

          const message = 'You have already paid required amount';
          dispatch(failedPayment(message));

        } else {
          // make payment
          const newAmount = user.amountPaid + amountPaid;
          const update = {
            amountPaid: newAmount
          };
          return database.ref(`payments/${user.paymentId}`).update(update).then((ref) => {
            const message = 'You have made payment successfully';
            dispatch(successPayment(message));
            dispatch(startSetPaymentDetails());
            history.push('/paid/success');
          })
        }

      } else {
        // make payment
        const payment = {
          regNo: regNo,
          amountPaid,
          paymentDate,
          paymentTime,
          academicYear: details
        };
        return database.ref(`payments`).push(payment).then((ref) => {
          const message = 'You have made payment successfully';
          dispatch(successPayment(message));
          dispatch(startSetPaymentDetails());
          history.push('/paid/success');
        })

      }
    });
  };
};