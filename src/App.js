import './App.css';
import { useContext } from 'react';
import { RouterProvider, createBrowserRouter, Navigate, Route  } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Login from './Component/Login/Login.jsx'
import Register from './Component/Register/Register.jsx'
import TeacherDashboard from './Component/Teacher/TeacherDashboard.jsx'
import AuthContext from './context/AuthProvider.js';



function App() {
  const PrivateRoute = ({ element, ...rest }) => {
    const { auth } = useContext(AuthContext);

    // Check if accessToken exists in the auth context
    if (!auth.accessToken) {
      // Redirect to the login page or any other page indicating authentication is required
      return <Navigate to="/login" />;
    }

    // Render the protected route
    return <Route {...rest} element={element} />;
  };

  let route = createBrowserRouter(
    [
      {
        path: '/', element: <Layout />, children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          /* -------------------------------------------------------------------------- */
          /*                               Teacher Routes                               */
          /* -------------------------------------------------------------------------- */

          { 
            path: 'teacher', children: [
              { path: 'dashboard', element: <PrivateRoute TeacherDashboard /> },
              // Students Routes
            ]
          },
        ]
      }
    ]
  )
  return (
    <RouterProvider router={route} />

  );
}

export default App;
