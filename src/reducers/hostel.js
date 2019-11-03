// Rooms Reducer

const hostelReducerDefaultState = {hostel:'',academicYear:'2019-2020',term:'SEMESTER 1 2019-2020',rooms:[]};

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
