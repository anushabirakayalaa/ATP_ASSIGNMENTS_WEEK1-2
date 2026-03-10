import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <Header />
      <div className="mx-20 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;