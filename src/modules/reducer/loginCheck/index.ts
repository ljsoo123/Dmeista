import LoginCheckAction, {
  LOGINSTATE,
  MODALSTATE,
  SIGNUPSTATE,
  FRIENDSTATE,
  FRIENDCHECK,
  FRIENDDEL,
  CHANGEINFO,
  CHANGEPASSWORD,
  CHANGEEMAIL,
  NEWPOST,
  LOGINEND,
} from "../../action/loginCheck";
import { User, FriendRequest } from "../../../../types";

interface LoginInfo {
  email: string;
  password: string;
}

interface LoginState {
  loginCheck: boolean;
  modalCheck: boolean;
  user: User[];
  signUpCheck: boolean;
  friendCheck: boolean;
  changeInfo: boolean;
  changePassword: boolean;
  changeEmail: boolean;
  friendRequest: FriendRequest[];
  newPost: boolean;
  //loginInfo: LoginInfo;
}

export const initialState: LoginState = {
  loginCheck: false,
  modalCheck: false,
  signUpCheck: false,
  friendCheck: false,
  changeInfo: false,
  changePassword: false,
  changeEmail: false,
  newPost: false,
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
        //modalCheck: !state.modalCheck,
      };
    }
    case LOGINEND: {
      return {
        ...state,
        loginCheck: !state.loginCheck,
        //modalCheck: !state.modalCheck,
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
    case CHANGEINFO: {
      return {
        ...state,
        changeInfo: !state.changeInfo,
      };
    }
    case CHANGEPASSWORD: {
      return {
        ...state,
        changePassword: !state.changePassword,
      };
    }
    case CHANGEEMAIL: {
      return {
        ...state,
        changeEmail: !state.changeEmail,
      };
    }
    case NEWPOST: {
      return {
        ...state,
        newPost: !state.newPost,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginCheckReducer;
