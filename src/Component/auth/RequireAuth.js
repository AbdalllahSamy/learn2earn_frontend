import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";

const RequireAuth = ({ allowedType }) => {
  const { auth } = useAuth();

  if (localStorage.getItem("auth")) {
    return <Outlet />;
  }
  else {
    return <Navigate to="/login" />;
  }
};

export default RequireAuth;
