import React from 'react';
import ReactDOM from 'react-dom/client';
import router from "./router";
import { RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Comments from './components/comment';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Comments /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
