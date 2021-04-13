export const LOGINSTATE = "header/LOGIN";
export const LOGINSTATE_SAGA = "header/LOGINSTATE_SAGA";
export const LOGINEND = "LOGIN/LOGINEND";
export const LOGINEND_SAGA = "LOGIN/LOGINEND_SAGA";
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
export const CHANGEEMAIL = "CHANGEINFO/CHANGEEMAIL";
export const CHANGEEMAIL_SAGA = "CHANGEINFO/CHANGEEMAIL_SAGA";
export const NEWPOST = "NEWPOST/NEWPOST";
export const NEWPOST_SAGA = "NEWPOST/NEWPOST_SAGA";
export const FRIENDREQUESTLIST = "FRIENDREQUEST/FRIENDREQUESTLIST";
export const FRIENDREQUESTLIST_SAGA = "FRIENDREQUEST/FRIENDREQUESTLIST_SAGA";

export const loginState = () => ({ type: LOGINSTATE });
export const loginStateSaga = () => ({ type: LOGINSTATE_SAGA });
export const loginEnd = () => ({
  type: LOGINEND,
});
export const loginEndSaga = (email: string, password: string) => ({
  type: LOGINEND_SAGA,
  payload: {
    email: email,
    password: password,
  },
});
export const modalState = () => ({ type: MODALSTATE });
export const modalStateSaga = () => ({
  type: MODALSTATE_SAGA,
});
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
export const changeEmail = () => ({ type: CHANGEEMAIL });
export const changeEmailSaga = () => ({ type: CHANGEEMAIL_SAGA });
export const newPost = () => ({ type: NEWPOST });
export const newPostSaga = () => ({ type: NEWPOST_SAGA });
export const friendRequestList = (data: string[]) => ({
  type: FRIENDREQUESTLIST,
  payload: data,
});
export const friendRequestListSaga = () => ({ type: FRIENDREQUESTLIST_SAGA });

type LoginCheckAction = ReturnType<
  | typeof loginState
  | typeof modalState
  | typeof signUpState
  | typeof friendState
  | typeof friendRequest
  | typeof friendDel
  | typeof changeInfo
  | typeof changePassword
  | typeof changeEmail
  | typeof newPost
  | typeof friendRequestList
>;

export default LoginCheckAction;
