import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-between px-10 py-4 bg-gray-100'>
      <div className="text-xl font-bold">User Management</div>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className={({isActive})=>isActive? "text-blue-500" : "text-gray-700"} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className={({isActive})=>isActive? "text-blue-500" : "text-gray-700"}>
            Add User
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({isActive})=>isActive? "text-blue-500" : "text-gray-700"}>
            Users List
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header