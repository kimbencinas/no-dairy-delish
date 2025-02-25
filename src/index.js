import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Meals from './Pages/Meals';
import Ingredients from './Pages/Ingredients';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Account from './Pages/Account';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Breakfast from './Pages/Breakfast';
import Lunch from './Pages/Lunch';
import Dinner from './Pages/Dinner';
import ResetPassword from './Pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/meals',
    element: <Meals />
  },
  {
    path: '/ingredients',
    element: <Ingredients />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/account',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/breakfast',
    element: <Breakfast />
  },
  {
    path: '/lunch',
    element: <Lunch />
  },
  {
    path: '/dinner',
    element: <Dinner />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

