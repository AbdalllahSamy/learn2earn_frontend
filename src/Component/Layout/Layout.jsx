import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPathRef = useRef();

  const auth = JSON.parse(localStorage.getItem("auth"));
  useEffect(() => {
    const prevPath = prevPathRef.current;
    console.log("1 ", prevPathRef.current);
    if (auth) {
      if (location.pathname === "/") {
        navigate(`/${auth.type_user}`);
      } else if (location.pathname !== prevPath) {
        navigate(location.pathname);
      }
    }

    prevPathRef.current = location.pathname;

    console.log("2 ", prevPathRef.current);

    if (!(location.pathname === "/login/complete-profile")) {
      localStorage.removeItem("temp_auth");
    }
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <Outlet></Outlet>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("login");
        }}
      >
        Logout
      </button>
      {/* <Footer /> */}
    </>
  );
}
