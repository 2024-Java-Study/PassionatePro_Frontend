import { Navigate } from "react-router-dom";

const PublicRoute = ({access, component}) => {

    return access ? <Navigate to="/" /> : component;
};
export default PublicRoute;