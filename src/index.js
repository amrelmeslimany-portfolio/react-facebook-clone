import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Postcontext from "./context/Postcontext";

ReactDOM.render(
  <React.StrictMode>
    <Postcontext>
      <App />
    </Postcontext>
  </React.StrictMode>,
  document.getElementById("root")
);
