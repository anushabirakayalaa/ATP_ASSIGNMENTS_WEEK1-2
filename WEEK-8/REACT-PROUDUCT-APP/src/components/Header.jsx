import { NavLink } from 'react-router'

// Header component renders the navigation bar
function Header() {
  return (
    <div className='flex justify-between px-10 bg-gray-300 items-center'>
      <img className="p-2"
      width='80-px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOHZTjTNfzlxgkO93TgCsYgk4jTU9Cm0zDA&s" alt="" />
      {/* navbar */}
      <nav>
        <ul className=' flex gap-10 text-2xl'>
          <li>
            <NavLink to="/" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2":""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="productlist" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2":""}>ProductList</NavLink>
          </li>
          <li>
            <NavLink to="contactus" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2":""}>ContactUs</NavLink>
          </li>
          <li>
             <input type="text" placeholder='search' border-2px />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header