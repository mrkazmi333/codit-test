import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import rootReducer from "./reducers";

const logger = ({ dispatch, getState }) => (next) => (action) => {
  //logger code
  // console.log("ACTION_TYPE = ", action.type);
  next(action);
};

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    action(dispatch);
    return;
  }
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log("Store", store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
