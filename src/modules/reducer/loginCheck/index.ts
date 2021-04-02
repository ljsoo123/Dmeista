import LoginCheckAction, {
  LOGINSTATE,
  MODALSTATE,
  SIGNUPSTATE,
  FRIENDSTATE,
  FRIENDCHECK,
  FRIENDDEL,
} from "../../action/loginCheck";
import { User, FriendRequest } from "../../../../types";

interface LoginState {
  loginCheck: boolean;
  modalCheck: boolean;
  user: User[];
  signUpCheck: boolean;
  friendCheck: boolean;
  friendRequest: FriendRequest[];
}

export const initialState: LoginState = {
  loginCheck: false,
  modalCheck: false,
  signUpCheck: false,
  friendCheck: false,
  user: [
    {
      nickname: "kangshinhee",
      email: "rkdtlsgml40@gmail.com",
      createdAt: "2020-12-15",
    },
  ],
  friendRequest: [
    { check: false, del: false, nickname: "이지수" },
    { check: false, del: false, nickname: "강신희" },
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
    case FRIENDSTATE: {
      return {
        ...state,
        friendCheck: !state.friendCheck,
      };
    }
    case FRIENDCHECK: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginCheckReducer;
