// react-router-dom is required for browser-based routing
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from "./components/Home"
import ProductList from './components/ProductList'
import ContactUS from './components/ContactUS'
import Product from './components/Product'
import Search from './components/Search'

import React from 'react'


function App() {


  // routing configuration
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,        
      children: [
        { path: "/", 
          element: <Home /> },
        { path: "productlist", 
          element: <ProductList /> },
        { path: "product", 
          element: <Product /> },
        { path: "contactus", 
          element: <ContactUS /> 
        }
      
      ]
    }
  ])
    return <RouterProvider router={routerObj} />
}

export default App