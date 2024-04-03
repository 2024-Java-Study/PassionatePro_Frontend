import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// function setScreenSize() {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty("--vh", `${vh}px`);
// }

// window.addEventListener("resize", () => setScreenSize());

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
