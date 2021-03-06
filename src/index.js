import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./hoc/App/App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
