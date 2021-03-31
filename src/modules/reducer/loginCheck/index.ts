import LoginCheckAction, {
  LOGINSTATE,
  MODALSTATE,
  SIGNUPSTATE,
} from "../../action/loginCheck";
import { User } from "../../../../types";
import SignUp from "../../../components/SignUp/SignUp";

interface LoginState {
  loginCheck: boolean;
  modalCheck: boolean;
  user: User[];
  signUpCheck: boolean;
}

export const initialState: LoginState = {
  loginCheck: false,
  modalCheck: false,
  signUpCheck: false,
  user: [
    {
      nickname: "kangshinhee",
      email: "rkdtlsgml40@gmail.com",
      createdAt: "2020-12-15",
    },
  ],
};

const loginCheckReducer = (
  state: LoginState = initialState,
  action: LoginCheckAction
): LoginState => {
  switch (action.type) {
    case LOGINSTATE: {
      return {
        ...state,
        loginCheck: !state.loginCheck,
      };
    }
    case MODALSTATE: {
      return {
        ...state,
        modalCheck: !state.modalCheck,
      };
    }
    case SIGNUPSTATE: {
      return {
        ...state,
        signUpCheck: !state.signUpCheck,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginCheckReducer;
