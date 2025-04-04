import { NavLink } from 'react-router-dom'
import { RiBowlLine, RiHeart2Line, RiHome2Line, RiPhoneLine, RiUser3Line } from '@remixicon/react'
import logo from '../assets/logo1.jpeg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-menu md:hidden flex items-center text-orange-400 cursor-pointer">
        <img src={logo} alt="logo" className='w-6 h-6'/>
      </div>

      <div className="nav-menus">
        <NavLink to={`/home`} 
          className={ ({isActive}) => {return isActive ? 'nav-menu-active' : 'nav-menu' }  }>
            <div className="flex items-center gap-1">
              <RiHome2Line className='sm:flex md:flex text-accent '/>
              <span className='max-md:hidden'>Home</span>
            </div>            
        </NavLink>


        <NavLink to={`/meal/create`} 
          className={ ({isActive}) => {return isActive ? 'nav-menu-active' : 'nav-menu' }  }>
            <div className="flex items-center gap-1">
              <RiBowlLine className='sm:flex md:flex text-accent '/>
              <span className='max-md:hidden'>Meal</span>
            </div>            
        </NavLink>

        <NavLink to={`/category-page/favorites`} 
          className={ ({isActive}) => {return isActive ? 'nav-menu-active' : 'nav-menu' }  }>
            <div className="flex items-center gap-1">
              <RiHeart2Line className='sm:flex md:flex text-accent '/>
              <span className='max-md:hidden'>Favorites</span>
            </div>            
        </NavLink>

        <NavLink to={`/home`} 
          className={ ({isActive}) => {return isActive ? 'nav-menu-active' : 'nav-menu' }  }>
            <div className="flex items-center gap-1">
              <RiPhoneLine className='sm:flex md:flex text-accent '/>
              <span className='max-md:hidden'>Contact</span>
            </div>            
        </NavLink>
      </div>

      <div className="nav-menu cursor-pointer ">
        <RiUser3Line />
      </div>
    </nav>
  )
}

export default Navbar
