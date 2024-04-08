import { createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';

import MainLayout from 'layouts/main-layout';
import ErrorPage from 'pages/errors/ErrorPage';
import AuthLayout from 'layouts/auth-layout';
import Login from 'pages/authentication/Login';
import Signup from 'pages/authentication/Signup';
import Dashboard from 'pages/dashboards/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Dashboard></Dashboard>,
      },
    ],
  },
  {
    path: rootPaths.authRoot,
    element: <AuthLayout />,
    children: [
      {
        path: paths.login,
        element: <Login />,
      },
      {
        path: paths.signup,
        element: <Signup />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
