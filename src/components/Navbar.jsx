import { NavLink } from 'react-router-dom'
import { RiBowlLine, RiCake2Line, RiGlobalLine, RiGlobeLine, RiGoblet2Line, RiGobletFill, RiGobletLine, RiHeart2Line, RiHome2Line, RiLeafLine, RiPhoneLine, RiRestaurant2Line, RiRestaurantLine, RiShoppingBasketLine, RiUser3Line } from '@remixicon/react'
import logo from '../assets/logo1.jpeg'

const Navbar = ({showMenu, setShowMenu}) => {
  return (
    <>
      <nav className='navbar'>
        <div className="nav-menu md:hidden flex items-center text-orange-400 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>

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

          <NavLink to={`/contact`} 
            className={ ({isActive}) => {return isActive ? 'nav-menu-active' : 'nav-menu' }  }>
              <div className="flex items-center gap-1">
                <RiPhoneLine className='sm:flex md:flex text-accent '/>
                <span className='max-md:hidden'>Contact</span>
              </div>            
          </NavLink>
        </div>

        <div className="nav-menu cursor-pointer flex-col">
          <RiUser3Line />
        </div>
      </nav>


    {/* MOBILE NAV */}
    {
      showMenu && 
      (
        <div className="bg-white side-menus h-fit w-fit border border-accent/40 p-4 rounded-md !mt-2 z-30 absolute">
          <div className="side-menu">
            <span><RiCake2Line className='text-orange-400' /></span>
            <NavLink to={`/category-page/confectioneries`}>Confectioneris</NavLink>
          </div>

          <div className="side-menu">
            <span><RiShoppingBasketLine className='text-orange-400' /></span>
            <NavLink to={`/category-page/local`}>Local</NavLink>
          </div>

          <div className="side-menu">
            <span><RiGlobalLine className='text-orange-400' /></span>
            <NavLink to={`/category-page/continental`}>Continental</NavLink>
          </div>

          <div className="side-menu">
            <span><RiBowlLine className='text-orange-400' /></span>
            <NavLink to={`/category-page/chinese`}>Chinese</NavLink>
          </div>

          <div className="side-menu">
            <span><RiRestaurantLine className='text-orange-400' /></span>
            <NavLink to={`/category-page/appetizer`}>Appetizer</NavLink>
          </div>

          <div className="side-menu">
            <span><RiLeafLine className='text-orange-400' /></span>
            <NavLink to={`/category-page/vegetarian`}>Vegetarian</NavLink>
          </div>

          <div className="side-menu">
            <span><RiGlobeLine className='text-orange-400' /></span>
            <NavLink to={`/category-page/confectioneries`}>Italian</NavLink>
          </div>

          <div className="side-menu">
            <span><RiGobletFill className='text-orange-400' /></span>
            <NavLink to={`/category-page/drinks`}>Drinks</NavLink>
          </div>
        </div>
      )
    }
    </>
  )
}

export default Navbar
