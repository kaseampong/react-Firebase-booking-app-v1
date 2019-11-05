// BOOKING REDUCER

const BookingReducerDefaultState = {
  bookings: [],
  message: '',
  paymentMessage: ''
};

export default (state = BookingReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_BOOKING':
      return {
        ...state,
        bookings: action.booking
      };

    case 'FAILED_BOOKING':
      return {
        ...state,
        message: action.message
      };

    case 'RESET_MESSAGE':
      return {
        ...state,
        message: ''
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};