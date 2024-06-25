import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CookiesProvider>
);
