import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Chat from "./Chat";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <main>
      <Route path="/" exact component={App} />
      <Route path="/chat" exact component={Chat} />
    </main>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
