import './App.css';
import { RouterProvider, createBrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Login from './Component/Login/Login.jsx'
import Register from './Component/Register/Register.jsx'
import TeacherDashboard from './Component/Teacher/TeacherDashboard.jsx'
import RequireAuth from './Component/auth/RequireAuth.js';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route path="teacher/">
            <Route path="dashboard" element={<TeacherDashboard />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
