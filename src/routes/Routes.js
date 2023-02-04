import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Shop from '../components/Shop/Shop';
import Orders from '../components/Orders/Orders';
import productsAndCartLoader from '../Loaders/productsAndCartLoader';
import PrivateRoute from '../routes/PrivateRoute';
import Inventory from '../components/Inventory/Inventory';
import Shipping from '../components/Shipping/Shipping';
import About from '../components/About/About';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/orders",
        loader: productsAndCartLoader,
        element: <Orders/>
      },
      {
        path: "/inventory",
        element: (
            <PrivateRoute>
                <Inventory/>
            </PrivateRoute>
        ),
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipping></Shipping>
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);