import database from '../firebase/firebase';
import { history } from '../routers/AppRouter';


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
    
    const adm = getState().auth.adm;
    const term = getState().auth.term;
    const academicYear = getState().auth.academicYear;
    
    return database.ref(`payments/${academicYear}/${adm}`).orderByChild('term').equalTo(term).once('value').then((snapshot) => {
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
    const academicYear = getState().auth.academicYear;

    let {
       adm = '',
       phone = '',
       term = '',
        amount = 0,
        date = '',
        time = ''
    } = userData;

    //check the if user has already made payment
    return database.ref(`payments/${academicYear}/${adm}`).orderByChild('term').equalTo(term).once('value').then((snapshot) => {

      if (snapshot.exists()) {
        let user = {};
        snapshot.forEach((childSnapshot) => {
          user = {
            ...user,
            paymentId: childSnapshot.key,
            ...childSnapshot.val(),
          }

        });
        
          let newAmount = user.amount + amount;
          let update = {
            amount: newAmount
          };
          return database.ref(`payments/${academicYear}/${adm}/${user.paymentId}`).update(update).then((ref) => {
            const message = 'You have made payment successfully';
            dispatch(successPayment(message));
            dispatch(startSetPaymentDetails());
            history.push('/paid/success');
          })
        

      } else {
        // make payment
        const payment = {
          phone,
          amount,
          term,
          date,
          time,
        };
        return database.ref(`payments/${academicYear}/${adm}`).push(payment).then((ref) => {
          const message = 'You have made payment successfully';
          dispatch(successPayment(message));
          dispatch(startSetPaymentDetails());
          history.push('/paid/success');
        })

      }
    });
  };
};