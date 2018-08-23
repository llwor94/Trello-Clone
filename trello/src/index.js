import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store";
import AppRouter from "./AppRouter";

const app = (
  <Provider store={configureStore()}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
