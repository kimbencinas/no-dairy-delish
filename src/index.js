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

