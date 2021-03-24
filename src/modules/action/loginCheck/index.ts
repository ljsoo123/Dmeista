export const LOGINSTATE = "header/LOGIN";

export const LOGINSTATE_SAGA = "header/LOGINSTATE_SAGA";

export const loginState = () => ({ type: LOGINSTATE });

export const loginStateSaga = () => ({ type: LOGINSTATE_SAGA });

type LoginAction = ReturnType<typeof loginState>;

export default LoginAction;
