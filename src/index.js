import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { CookiesProvider } from "react-cookie";
// import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import rootReducer from "./store/modules";
import PrivateRoute from "./PrivateRoute";

const store = createStore(rootReducer);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
// registerServiceWorker();
root.render(
  <CookiesProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CookiesProvider>
);
