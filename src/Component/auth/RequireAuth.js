import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ allowedType }) => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [isMounted, setIsMounted] = useState(false);
  const [urlstate, setUrl] = useState("");
  const location = useLocation();

  // useEffect(() => {
  //   const parts = location.pathname.split("/");
  //   const teacherValue = parts[1];
  //   console.log(teacherValue); // Output: "teacher"

  // }, [urlstate, location]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  console.log(location);
  useEffect(() => {
    if (!auth && isMounted) {
      navigate("/login");
    }
  }, [auth, navigate, isMounted]);

  if (auth) return <Outlet />;
};

export default RequireAuth;
