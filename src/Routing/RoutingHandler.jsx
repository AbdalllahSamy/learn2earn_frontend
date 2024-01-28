import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Import the components that will be rendered based on the current location
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Layout from "../Component/Layout/Layout";
import RequireAuth from "../Component/auth/RequireAuth";

import TeacherDashboard from "../Component/Teacher/TeacherDashboard";
import StudentDashboard from "../Component/Register/Student/StudentDashboard";
import ParentDashboard from "../Component/Register/Parent/ParentDashboard";
import AdminDashboard from "../Component/Register/Admin/AdminDashboard";

const RoutingHandler = () => {
  const location = useLocation();

  return (
    // Render the routes based on the current location
    <Routes>
      <Route path="/" loader={()=>{
        if (localStorage.getItem("auth")) {
          return Navigate("/dashboard");
        } else {
          return <Login />;
        }
      }} element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<RequireAuth/>}>
          <Route path="teacher/">
            <Route path="dashboard" element={<TeacherDashboard />} />
          </Route>
          <Route path="student/">
            <Route path="dashboard" element={<StudentDashboard />} />
          </Route>
          <Route path="parent/">
            <Route path="dashboard" element={<ParentDashboard />} />
          </Route>
          <Route path="admin/">
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutingHandler;
