import { Navigate, Outlet } from "react-router-dom";
import HomePage from "./App";
import router from "./router";

const PrivateRoute = ({access}) => {
  console.log("접속");
  console.log(access);
  return access ? <Outlet /> : <Navigate to="/members/login" />;
  // return isLogin ? <Navigate to="/members/login" /> : <Outlet />;
};
export default PrivateRoute;