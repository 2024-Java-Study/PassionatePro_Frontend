import { createBrowserRouter } from "react-router-dom";
import {
  CreateBoardPage,
  HomePage,
  LoginPage,
  SignUpPage,
  PostPage,
} from "./pages";

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
    path: "/boards/new",
    element: <CreateBoardPage />,
  },
  {
    path: "/boards",
    element: <PostPage />,
  },
]);

export default router;
