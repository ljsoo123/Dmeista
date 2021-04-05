export const LOGINSTATE = "header/LOGIN";
export const LOGINSTATE_SAGA = "header/LOGINSTATE_SAGA";
export const MODALSTATE = "LOGIN/MODAL";
export const MODALSTATE_SAGA = "LOGIN/MODAL_SAGA";
export const SIGNUPSTATE = "SIGNUP/SIGNUPSTATE";
export const SIGNUPSTATE_SAGA = "SIGNUP/SIGNUPSTATE_SAGA";
export const FRIENDSTATE = "FRIENDREQUEST/FRIENDSTATE";
export const FRIENDSTATE_SAGA = "FRIENDREQUEST/FRIENDSTATE_SAGA";
export const FRIENDCHECK = "REQUESTLIST/FRIENDREQUEST";
export const FRIENDCHECK_SAGA = "REQUESTLIST/FRIENDREQUEST_SAGA";
export const FRIENDDEL = "REQUESTLIST/FRIENDDEL";
export const FRIENDDEL_SAGA = "REQUESTLIST/FRIENDDEL_SAGA";
export const CHANGEINFO = "CHANGEINFO/CHANGEINFO";
export const CHANGEINFO_SAGA = "CHANGEINFO/CHANGEINFO_SAGA";
export const CHANGEPASSWORD = "CHANGEINFO/CHANGEPASSWORD";
export const CHANGEPASSWORD_SAGA = "CHANGEINFO/CHANGEPASSWORD_SAGA";

export const loginState = () => ({ type: LOGINSTATE });
export const loginStateSaga = () => ({ type: LOGINSTATE_SAGA });
export const modalState = () => ({ type: MODALSTATE });
export const modalStateSaga = () => ({ type: MODALSTATE_SAGA });
export const signUpState = () => ({ type: SIGNUPSTATE });
export const signUpStateSaga = () => ({ type: SIGNUPSTATE_SAGA });
export const friendState = () => ({ type: FRIENDSTATE });
export const friendStateSaga = () => ({ type: FRIENDSTATE_SAGA });
export const friendRequest = () => ({ type: FRIENDCHECK });
export const friendRequestSaga = () => ({ type: FRIENDCHECK_SAGA });
export const friendDel = () => ({ type: FRIENDDEL });
export const friendDelSaga = () => ({ type: FRIENDDEL_SAGA });
export const changeInfo = () => ({ type: CHANGEINFO });
export const changeInfoSaga = () => ({ type: CHANGEINFO_SAGA });
export const changePassword = () => ({ type: CHANGEPASSWORD });
export const changePasswordSaga = () => ({ type: CHANGEPASSWORD_SAGA });

type LoginCheckAction = ReturnType<
  | typeof loginState
  | typeof modalState
  | typeof signUpState
  | typeof friendState
  | typeof friendRequest
  | typeof friendDel
  | typeof changeInfo
  | typeof changePassword
>;

export default LoginCheckAction;
