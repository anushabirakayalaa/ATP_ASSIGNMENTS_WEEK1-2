// Have done Changes 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AddArticle from './components/AddArticle';
import { UserDashboard } from './components/Dashboards';
import {Toaster} from "react-hot-toast" 
//Toaster component to show the toast notifications in our application. we will use it in our components where we want to show the toast notifications
//  for example, in the Register component, we will show a success toast notification when the user is registered successfully and an error toast notification when the registration fails. we can also use it in the Login component to show a success toast notification when the user is logged in successfully and an error toast notification when the login fails.
// import { UserDashboard, AuthorDashboard, AdminDashboard } from './components/Dashboards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-article" element={<AddArticle />} />
         <Route path="/user-dashboard" element={<UserDashboard />} />
         {/* <Route path="/author-dashboard" element={<AuthorDashboard />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;