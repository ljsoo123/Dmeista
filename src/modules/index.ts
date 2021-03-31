import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import createSaga from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga";

const saga = createSaga();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);
saga.run(rootSaga);

export default store;
