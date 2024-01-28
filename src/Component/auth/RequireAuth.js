import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedType }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user?.find(type => allowedType?.includes(type))
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth;