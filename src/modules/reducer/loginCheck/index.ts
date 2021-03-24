import LoginAction, { LOGINSTATE } from "../../action/loginCheck";

interface LoginState {
  loginCheck: boolean;
}

const initialState: LoginState = {
  loginCheck: false,
};

const loginCheckReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case LOGINSTATE: {
      return {
        loginCheck: !state.loginCheck,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginCheckReducer;
