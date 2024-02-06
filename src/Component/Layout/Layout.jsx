import React, { useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BluredEffect } from "../../context/BluredEffect";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPathRef = useRef();

  const bluredEffect = useContext(BluredEffect).bluredContext;

  const auth = JSON.parse(localStorage.getItem("auth"));
  useEffect(() => {
    const prevPath = prevPathRef.current;
    if (auth) {
      if (location.pathname === "/") {
        navigate(`/${auth.type_user}`);
      } else if (location.pathname !== prevPath) {
        if (location.pathname === "/login") {
          navigate(`/${auth.type_user}`);
        } else navigate(location.pathname);
      }
    }

    prevPathRef.current = location.pathname;

    if (!(location.pathname === "/login/complete-profile")) {
      localStorage.removeItem("temp_auth");
    }
  }, []);
  const shouldRenderLogoutButton = !["/register", "/login"].includes(
    location.pathname
  );

  return (
    <div>
      <Outlet></Outlet>
      {/* {shouldRenderLogoutButton && (
        <button
          onClick={() => {
            localStorage.clear();
            navigate("login");
          }}
        >
          Logout
        </button>
      )} */}
      {/* <Footer /> */}
    </div>
  );
}
