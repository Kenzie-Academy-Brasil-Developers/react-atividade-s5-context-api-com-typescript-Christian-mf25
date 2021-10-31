import reportWebVitals from "./reportWebVitals";
import Providers from "./Providers";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
