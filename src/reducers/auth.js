// AUTH REDUCER

const authDefaultState={
  uid:'',
  adm:'',
  gender:'',
  academicYear:'',
  loginMessage:'',
  signupMessage:''
};
export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        uid:action.user.uid,
        adm: action.user.adm,
        gender:action.user.gender
      };

      case 'LOGIN_FAIL':
      return {
        ...state,
        loginMessage:action.message
      };

      case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        signupMessage:action.message
      };
      case 'SIGN_UP_FAIL':
      return {
        ...state,
        signupMessage:action.message
      };

      case 'RESET_AUTH':
        return {
          ...state,
          resetMessage:'',
          signupMessage:'',
          loginMessage:''

        };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
