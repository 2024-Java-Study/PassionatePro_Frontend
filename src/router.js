import { createBrowserRouter } from "react-router-dom";
import {
  CreateBoardPage,
  HomePage,
  LoginPage,
  SignUpPage,
  PostPage,
  MyPage,
  UpdateBoardPage,
} from "./pages";
import PrivateRoute from "./PrivateRoute";
import AuthGuardLayout from "./AuthGuardLayout";

const isLogin = Boolean(localStorage.getItem("username"));

const routerData = [
  {
    path: "/",
    element: <HomePage />,
    label: "Home",
    withAuth: true,
  },
  {
    path: "/members/login",
    element: <LoginPage />,
    withAuth: false,
    label: "로그인 화면",
  },
  {
    path: "/members/signup",
    element: <SignUpPage />,
    withAuth: false,
    label: "회원가입 화면",
  },
  {
    path: "/boards/new",
    element: <CreateBoardPage />,
    withAuth: true,
    label: "게시물 생성 화면",
  },
  {
    path: "/boards",
    element: <PostPage />,
    withAuth: true,
    label: "게시물 단건 조회 화면",
  },
  {
    path: "/members/me",
    element: <MyPage />,
    withAuth: true,
    label: "마이페이지",
  },
  {
    path: "/boards/update",
    element: <UpdateBoardPage />,
    withAuth: true,
    label: "게시물 수정 화면",
  },
];

const router = createBrowserRouter(
  routerData.map((router) => {
    if (!router.withAuth) {
        return {
          path: router.path,
          // element: <AuthGuardLayout access={isLogin} />,
          // element: <AuthGuardLayout access={isLogin}>{router.element}</AuthGuardLayout>
          // element: <PrivateRoute>{router.element}</PrivateRoute>,
          element: router.element,
        };
      } else {
        return {
          path: router.path,
          element: router.element,
          // element: <PrivateRoute access={isLogin}></PrivateRoute>,
          // element: <PrivateRoute access={isLogin}>{router.element}</PrivateRoute>,

        }
      }
  })
);


export default router;
