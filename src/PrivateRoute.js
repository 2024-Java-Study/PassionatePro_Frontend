import { Navigate } from "react-router-dom";

const PrivateRoute = ({access, component}) => {

    return access ? component : <Navigate to="/members/login" /> ;
};
export default PrivateRoute;
