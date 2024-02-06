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
      <div>
        <NavBar>
          <h1 className="hidden md:block text-[1em]">
            Dev note : go to{" "}
            <span style={{ fontWeight: 800 }}>RequireAuth.jsx</span> then write
            your code inside the The
            <span style={{ fontWeight: 800 }}> NavBar.jsx</span> as a
            child component
          </h1>
        </NavBar>
        <Outlet />
      </div>
    );
};

export default RequireAuth;
