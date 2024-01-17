import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Login from './Component/Login/Login.jsx'
import Register from './Component/Register/Register.jsx'



function App() {
  
  let route = createBrowserRouter(
    [
      {
        path: '/', element: <Layout />, children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          
        ]
      }
    ]
  )
  return (
    <RouterProvider router={route} />

  );
}

export default App;
