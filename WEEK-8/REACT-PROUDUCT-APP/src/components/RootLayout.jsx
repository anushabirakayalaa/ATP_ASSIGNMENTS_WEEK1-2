import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
// use DOM flavor for Outlet as well
import { Outlet } from "react-router-dom"

function RootLayout() {
  // return the layout containing header, outlet for nested routes and footer
  return (
    <div>
      <Header />
      {/* component placeholder */}
      <div className='mx-20 min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout