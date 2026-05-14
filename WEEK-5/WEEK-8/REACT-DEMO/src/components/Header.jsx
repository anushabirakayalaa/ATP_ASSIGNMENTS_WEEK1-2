import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
    <div className='flex justify-between items-center'>
      <img className="py-2 rounded-['50%']"
      width='80-px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOHZTjTNfzlxgkO93TgCsYgk4jTU9Cm0zDA&s" alt="" />
      {/* navbar */}
      <nav>
        <ul className='flex gap-10 text-2xl bg-gray-200'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="technologies">Technologies</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header