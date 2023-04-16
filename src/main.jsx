import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthProviders from './provider/AuthProviders';

import Order from './components/Order';
import PrivateRouter from './router/PrivateRouter';
import Profile from './components/Profile';
// import PrivateRouter from './PrivateRouter/PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/profile',
        element:<PrivateRouter><Profile></Profile></PrivateRouter>
      },
      ,{
        path:'/order',
        element:<PrivateRouter><Order></Order></PrivateRouter>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
