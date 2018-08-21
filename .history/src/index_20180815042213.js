import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { LangProvider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
const Application = () => {
  return (
    <LangProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LangProvider>
  );
};
ReactDOM.render(<Application />, document.getElementById("root"));
registerServiceWorker();
