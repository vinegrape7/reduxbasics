import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import resultsReducer from "./store/resultsReducer";
import counterReducer from "./store/counterReducer";
import { Provider } from "react-redux";

const reducers = combineReducers({
  res: resultsReducer,
  ctr: counterReducer
});

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
