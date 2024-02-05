import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Layout/NavBar";

const RequireAuth = ({ allowedType }) => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!auth && isMounted) {
      navigate("/login");
    }
  }, [auth, navigate, isMounted]);

  if (auth)
    return (
      <>
        <div className="py-[1.5em] px-[1.5em]">
          <NavBar>{/* Write your custom bar here  */}</NavBar>
        </div>
        <Outlet />
      </>
    );
};

export default RequireAuth;
