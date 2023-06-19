import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import setupMockServer from "./api/mock.server";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
setupMockServer();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
