import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import RootLayout from './components/RootLayout';
import UsersList from './components/UsersList';
import User from './components/User';

function App() {
  const routerObj = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'add', element: <AddUser /> },
        { path: 'users', element: <UsersList /> },
        { path: 'user/:id', element: <User /> },
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;