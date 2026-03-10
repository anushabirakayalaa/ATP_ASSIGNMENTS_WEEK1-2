import React from 'react'
import { NavLink } from 'react-router'
function Header() {
  return (
    <nav className='flex justify-between'>
        <p>Logo</p>
        <ul className='flex gap-6'>
            <li>
                <NavLink to ="/">Home</NavLink>
            </li>
            <li>
                <NavLink to ="/register">Register</NavLink>
            </li>
            <li>
                <NavLink to ="/login">Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header