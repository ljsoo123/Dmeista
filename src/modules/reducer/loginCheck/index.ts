import LoginCheckAction, {
  LOGINSTATE,
  MODALSTATE,
} from "../../action/loginCheck";
import { User } from "../../../../types";

interface LoginState {
  loginCheck: boolean;
  modalCheck: boolean;
  user: User[];
}

export const initialState: LoginState = {
  loginCheck: false,
  modalCheck: false,
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
    default: {
      return state;
    }
  }
};

export default loginCheckReducer;
