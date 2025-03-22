import { NavLink } from 'react-router-dom'
import { RiUser2Fill } from '@remixicon/react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-menus">
        <NavLink to={`/home`} className='nav-menu'>Home</NavLink>
        <NavLink to={`/about`} className='nav-menu'>About</NavLink>
        <NavLink to={`/contact`} className='nav-menu'>Contact</NavLink>
      </div>

      <div className="nav-menu cursor-pointer">
          <RiUser2Fill />
      </div>
    </nav>
  )
}

export default Navbar
