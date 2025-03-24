import React from 'react'
import logo from '../assets/logo.jpeg'
import {  RiBowlFill, RiCake2Fill, RiDrinks2Line, RiGlobeLine, RiLeafLine, RiRestaurant2Fill, RiRestaurantFill,  RiShoppingBag2Line, } from '@remixicon/react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='left-side'>
        <div className="flex flex-col text-center">
            <img src={logo} alt="logo" className='h-11 object-contain' />
            <h3 className='text-2xl font-semibold max-md:hidden'>
                <span className='text-accent'>New</span>
                <span className='text-orange-500'>Guidance</span>
            </h3>

            <div className="side-menus">               
                                   
                    <NavLink to={`/category-page/confectioneries`} className={ ({isActive}) => {
                        return isActive ? 'side-menu-active' : 'side-menu'
                    }  }>
                    <span className='text-orange-400'><RiCake2Fill /></span>
                    <span>Confectioneries</span>
                    </NavLink>               

                                  
                    <NavLink to={`/category-page/local`} className={ ({isActive}) => {
                        return isActive ? 'side-menu-active' : 'side-menu'
                    }  }>
                    <span className='text-orange-400'><RiBowlFill /></span>
                    <span>Local</span>
                    </NavLink>

                    <NavLink to={`/category-page/continental`} className={ ({isActive}) => {
                        return isActive ? 'side-menu-active' : 'side-menu'
                    }  }>
                    <span className='text-orange-400'><RiGlobeLine /></span>
                    <span>Continental</span>
                    </NavLink>

                    <NavLink to={`/category-page/chinese`} className={ ({isActive}) => {
                        return isActive ? 'side-menu-active' : 'side-menu'
                    }  }>
                    <span className='text-orange-400'><RiShoppingBag2Line /></span>
                    <span>Chinese</span>
                    </NavLink>

                    <NavLink to={`/category-page/appetizer`} className={ ({isActive}) => {
                        return isActive ? 'side-menu-active' : 'side-menu'
                    }  }>
                    <span className='text-orange-400'><RiRestaurant2Fill /></span>
                    <span>Appetizer</span>
                    </NavLink>

                    <NavLink to={`/category-page/vegetarian`} className={ ({isActive}) => {
                        return isActive ? 'side-menu-active' : 'side-menu'
                    }  }>
                    <span className='text-orange-400'><RiLeafLine /></span>
                    <span>Vegetarian</span>
                    </NavLink>

                    <NavLink to={`/category-page/italian`} className={ ({isActive}) => {
                        return isActive ? 'side-menu-active' : 'side-menu'
                    }  }>
                    <span className='text-orange-400'><RiRestaurantFill /></span>
                    <span>Italian</span>
                    </NavLink>

                    <NavLink to={`/category-page/drinks`} className={ ({isActive}) => {
                        return isActive ? 'side-menu-active' : 'side-menu'
                    }  }>
                    <span className='text-orange-400'><RiDrinks2Line /></span>
                    <span>Drinks</span>
                    </NavLink>

            </div>

        </div>
      
    </aside>
  )
}

export default Sidebar
