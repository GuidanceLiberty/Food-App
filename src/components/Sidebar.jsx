import React from 'react'
import logo from '../assets/logo.jpeg'
import { Ri4kLine, RiBowlFill, RiBowlLine, RiCake2Fill, RiDingdingLine, RiGlobeLine, RiLeafLine, RiRestaurant2Fill, RiRestaurant2Line, RiRestaurantFill, RiRestaurantLine, RiShoppingBag2Line, RiTable3 } from '@remixicon/react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='left-side'>
        <div className="flex flex-col text-center">
            <img src={logo} alt="logo" className='h-11 object-contain' />
            <h3 className='text-2xl font-semibold max-md:hidden'>
                <span className='text-accent'>Sizzling</span>
                <span className='text-orange-500'> Place</span>
            </h3>

            <div className="side-menus">
                

                <div className="side-menu">
                    <span className='text-orange-400'><RiCake2Fill /></span>
                    <NavLink to={`/category/confectioneries`}>Confectioneries</NavLink>
                </div>

                <div className="side-menu">
                    <span className='text-orange-400'><RiBowlFill /></span>
                    <NavLink to={`/category/local`}>Local</NavLink>
                </div>

                <div className="side-menu">
                    <span className='text-orange-400'><RiGlobeLine /></span>
                    <NavLink to={`/category/continental`}>Continental</NavLink>
                </div>

                <div className="side-menu">
                    <span className='text-orange-400'><RiShoppingBag2Line /></span>
                    <NavLink to={`/category/chinese`}>Chinese</NavLink>
                </div>

                <div className="side-menu">
                    <span className='text-orange-400'><RiRestaurant2Fill /></span>
                    <NavLink to={`/category/appetizer`}>Appetizer</NavLink>
                </div>

                <div className="side-menu">
                    <span className='text-orange-400'><RiLeafLine /></span>
                    <NavLink to={`/category/vegetarian`}>Vegetarian</NavLink>
                </div>

                <div className="side-menu">
                    <span className='text-orange-400'><RiRestaurantFill /></span>
                    <NavLink to={`/category/italian`}>Italian</NavLink>
                </div>
            </div>

        </div>
      
    </aside>
  )
}

export default Sidebar
