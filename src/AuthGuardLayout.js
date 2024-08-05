import { Navigate, Outlet } from "react-router-dom";

const AuthGuardLayout = ({access}) => {
  return access ? <Navigate to="/" /> : <Outlet />;
};
export default AuthGuardLayout;