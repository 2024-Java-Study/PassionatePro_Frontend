import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

axios.defaults.headers.Cookie = process.env.REACT_APP_COOKIE;

export default function HomePage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}