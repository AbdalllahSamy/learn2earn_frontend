import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const auth = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (auth) {
      if (location.pathname === "/") navigate(`/${auth.type}`);
    } else navigate(`${location.pathname}`);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Outlet></Outlet>
      {/* <Footer /> */}
    </>
  );
}
