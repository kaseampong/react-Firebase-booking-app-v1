// Rooms Reducer

const hostelReducerDefaultState = {hostel:'',rooms:[]};

export default (state = hostelReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_HOSTEL':
      return{
        ...state,
        hostel:action.hostel,
        rooms:action.rooms
      
      }
      case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
