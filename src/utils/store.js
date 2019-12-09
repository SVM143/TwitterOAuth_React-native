import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import accountReducer from "../reducer/index";
import promise from "redux-promise";

const middlewares = [thunk, promise,logger];

const store = createStore(
  accountReducer,
  compose(applyMiddleware(...middlewares))
);
// console.log(logger)
export default store;