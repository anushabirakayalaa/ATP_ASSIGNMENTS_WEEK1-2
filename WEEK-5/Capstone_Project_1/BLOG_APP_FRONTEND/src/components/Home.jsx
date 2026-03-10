import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-sans p-6">
      
      {/* Title with the same red underline style from your Register page */}
      <h1 className="text-4xl font-bold mb-2 relative">
        BLOG PLATFORM
        <span className="absolute left-0 w-full h-1 bg-red-600"></span>
      </h1>
      <p className="text-gray-500 mt-6 text-xl">Manage your articles and profile effectively.</p>

      {/* Main Navigation Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        
        {/* Authentication Section */}
        <div className="bg-[#EAEAEA] p-8 rounded-sm flex flex-col items-center shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
          <div className="flex flex-col gap-4 w-full">
            <Link 
              to="/login" 
              className="bg-[#7BC9F5] text-black text-center py-3 rounded-sm text-xl font-medium hover:bg-[#62b5e6] transition"
            >
              Login to Account
            </Link>
            <Link 
              to="/register" 
              className="border-2 border-[#7BC9F5] text-black text-center py-3 rounded-sm text-xl font-medium hover:bg-[#7BC9F5] transition"
            >
              Register New User
            </Link>
          </div>
        </div>

        {/* Dashboard/Actions Section */}
        <div className="bg-[#EAEAEA] p-8 rounded-sm flex flex-col items-center shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Quick Links</h2>
          <div className="flex flex-col gap-4 w-full">
            <Link 
              to="/add-article" 
              className="bg-black text-white text-center py-3 rounded-sm text-xl font-medium hover:bg-gray-800 transition"
            >
              + Create New Article
            </Link>
            <div className="grid grid-cols-3 gap-2">
              {/* <Link to="/user-dashboard" className="bg-[#C4C4C4] text-xs p-2 text-center rounded-sm hover:bg-gray-400">User DB</Link>
              <Link to="/author-dashboard" className="bg-[#C4C4C4] text-xs p-2 text-center rounded-sm hover:bg-gray-400">Author DB</Link>
              <Link to="/admin-dashboard" className="bg-[#C4C4C4] text-xs p-2 text-center rounded-sm hover:bg-gray-400">Admin DB</Link> */}
            </div>
          </div>
        </div>

      </div>

      <footer className="mt-20 text-gray-400 text-sm italic">
        Ready for the next session.
      </footer>
    </div>
  );
};
export default Home