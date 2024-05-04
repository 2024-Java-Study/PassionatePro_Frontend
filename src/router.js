import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage, UpdateBoardPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // 로그인
  {
    path: "/members/login",
    element: <LoginPage />,
  },
  {
    path: "/members/signup",
    element: <SignUpPage />,
  },
  {
    path: "/board/1",
    element: <UpdateBoardPage />,
  },
]);

export default router;
