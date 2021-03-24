import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import createSaga from "redux-saga";
import rootSaga from "./saga";

const saga = createSaga();
const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);

export default store;
