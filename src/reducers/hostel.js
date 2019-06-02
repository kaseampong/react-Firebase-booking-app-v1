// Rooms Reducer

const hostelReducerDefaultState = {rooms:[]};

export default (state = hostelReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_ROOMS':
      return{
        ...state,
        rooms:action.rooms
      
      }
      case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
