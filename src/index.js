import React from "react";
import ReactDOM from "react-dom/client"; //client추가
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./service/saga";
import rootReducer from "./service/store";
import { BrowserRouter as Router } from "react-router-dom"; //App에 BrowserRouter as Router로 적용함에 따라 전체에 Router로 이름이 바뀐다.

const rootNode = document.getElementById("root"); //추가
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(rootNode).render(
  //createRoot(rootNode)추가
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Provider
