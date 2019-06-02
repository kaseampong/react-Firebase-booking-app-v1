// Booking Reducer

const BookingReducerDefaultState = {booking:[],message:''};

export default (state = BookingReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_BOOKING':
      return {
        ...state,
        booking:action.booking
      };
     
      case 'FAILED_BOOKING':
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
