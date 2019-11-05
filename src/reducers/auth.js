// AUTH REDUCER

const authDefaultState={
  uid:'',
  adm:'',
  gender:'',
  academicYear:'',
  term:'',
  message:''
};
export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        uid:action.user.uid,
        adm: action.user.adm,
        gender:action.user.gender,
        term:action.user.term,
        academicYear:action.user.academicYear

      };

      case 'LOGIN_FAIL':
      return {
        ...state,
        message:action.message
      };

      case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        message:action.message
      };
      case 'SIGN_UP_FAIL':
      return {
        ...state,
        message:action.message
      };

      case 'RESET_MESSAGE':
        return {
          ...state,
          message:'',

        };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
