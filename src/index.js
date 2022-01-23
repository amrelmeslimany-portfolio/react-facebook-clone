import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Postcontext from "./context/Postcontext";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Postcontext>
        <App />
      </Postcontext>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
