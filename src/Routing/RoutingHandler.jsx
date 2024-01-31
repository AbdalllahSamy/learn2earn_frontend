import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Import the components that will be rendered based on the current location
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Layout from "../Component/Layout/Layout";
import RequireAuth from "../Component/auth/RequireAuth";
import TeacherLayoutPage from "../Component/Teacher/TeacherLayoutPage";
import TeacherDashboard from "../Component/Teacher/TeacherDashboard";
import StudentLayoutPage from "../Component/Student/StudentLayoutPage";
import StudentDashboard from "../Component/Student/StudentDashboard";
import ParentLayoutPage from "../Component/Parent/ParentLayoutPage";
import ParentDashboard from "../Component/Parent/ParentDashboard";
import AdminLayoutPage from "../Component/Admin/AdminLayoutPage";
import AdminDashboard from "../Component/Admin/AdminDashboard";
import LoginPage from "../Component/Login/LoginPage";
import CompleteProfile from "../Component/Login/CompleteProfile";

const RoutingHandler = () => {
  const location = useLocation();

  return (
    // Render the routes based on the current location
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Link to="/login">Login</Link>} />
        <Route path="login" element={<LoginPage />}>
          <Route index element={<Login />} />
          <Route path="complete-profile" element={<CompleteProfile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route path="teacher" element={<TeacherLayoutPage />}>
            <Route path="dashboard" element={<TeacherDashboard />} />
          </Route>
          <Route path="student" element={<StudentLayoutPage />}>
            <Route path="dashboard" element={<StudentDashboard />} />
          </Route>
          <Route path="parent" element={<ParentLayoutPage />}>
            <Route path="dashboard" element={<ParentDashboard />} />
          </Route>
          <Route path="admin" element={<AdminLayoutPage />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  );
};

export default RoutingHandler;
