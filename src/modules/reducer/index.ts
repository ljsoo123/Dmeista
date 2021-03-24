import { combineReducers } from "redux";
import loginCheckReducer from "./loginCheck/index";

const rootReducer = combineReducers({
  loginCheck: loginCheckReducer,
});

export default rootReducer;
export type Store = ReturnType<typeof rootReducer>;
