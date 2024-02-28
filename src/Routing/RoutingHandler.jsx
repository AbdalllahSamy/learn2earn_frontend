import React from "react";
import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

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
import Users from "../Component/Admin/Manage Users/Users";
import StudentManage from "../Component/Teacher/Manage/StudentManage";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import LandingPage from "../Landing Page/LandingPage";
import StudentGroups from "../Component/Teacher/Manage/Groups/StudentGroups";
import TransitionEffect from "./TransitionEffect";

const RoutingHandler = () => {
  const router = createBrowserRouter(
    // Define the routes
    createRoutesFromElements(
      <>
        <Route path="/" errorElement={<ErrorHandler />} element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />}>
            <Route index element={<Login />} />
            <Route path="complete-profile" element={<CompleteProfile />} />
          </Route>
          <Route path="register" element={<TransitionEffect> <Register /> </TransitionEffect>} />
          <Route element={<RequireAuth />}>
            <Route path="teacher" element={<TeacherLayoutPage />}>
              <Route index element={<TeacherDashboard />} />
              <Route path="manage" element={<StudentManage />} />
              <Route path="groups" element={<StudentGroups />} />
            </Route>
            <Route path="student" element={<StudentLayoutPage />}>
              <Route path="dashboard" element={<StudentDashboard />} />
            </Route>
            <Route path="parent" element={<ParentLayoutPage />}>
              <Route path="dashboard" element={<ParentDashboard />} />
            </Route>
            <Route path="admin" element={<AdminLayoutPage />}>
              <Route index element={<AdminDashboard />} />
              <Route path="manage-users" element={<Outlet />}>
                <Route path="users" element={<Users />} />
                <Route path="add-user" element={<h1>Add User</h1>} />
                <Route path="edit-user" element={<h1>Edit User</h1>} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<ErrorHandler />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default RoutingHandler;
