import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

const { worker } = require("./mocks/browser");
worker.start();


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
