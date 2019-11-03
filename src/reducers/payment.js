// Payment Reducer

let paymentReducerDefaultState = {
  paymentId:'',
  academicYear:'',
  amount: 0,
  message:''
};

export default (state = paymentReducerDefaultState, action) => {
  switch (action.type) {
    case  'SET_PAYMENT_DETAILS':
        return {
          ...state,
          ...action.details
        };
    case 'FAILED_PAYMENT':
        return {
          ...state,
          message:action.message
        };
      case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
