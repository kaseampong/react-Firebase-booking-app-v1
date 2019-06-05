// Payment Reducer

const paymentReducerDefaultState = {
  paymentId:'',
  academicYear:'',
  amountPaid: 0,
  regNo: '',
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
