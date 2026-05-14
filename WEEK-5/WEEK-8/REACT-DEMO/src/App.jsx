import React from 'react'
// react-router-dom provides DOM bindings and hooks for web apps
import { createBrowserRouter, RouterProvider ,Navigate} from 'react-router'
import RootLayout from './components/RootLayout'
import Register from './components/Register'
import Login from './components/Login'
import Technologies from './components/Technologies'
import Java from './components/Java'
import Nodejs from './components/Nodejs'
import Vue from './components/Vue'
import Home from './components/Home'

function App() {


  // routing configuration
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,        
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              path: "java",
              element: <Java />
            },
            {
              path: "nodejs",
              element: <Nodejs />
            },
            {
              path: "vue",
              element: <Vue />
            },
            {
              path:"",
              element:<Navigate to="java"/>
            }
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={routerObj} />
}

export default App