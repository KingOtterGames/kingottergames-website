import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Typography } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Typography>
        <div
          style={{
            maxWidth: "1360px",
            margin: "auto",
            marginTop: "8px",
            minWidth: "900px",
          }}
        >
          <App />
        </div>
      </Typography>
    </BrowserRouter>
  </React.StrictMode>
);
