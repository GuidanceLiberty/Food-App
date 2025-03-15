import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Link, Outlet } from 'react-router-dom'
import ConfectionaryPage from './ConfectionaryPage'

const Index = () => {
  return (
    <main className='relative'>
        <div className="md:mx-4 lg:mx-auto flex justify-between">
            <Sidebar />

            <div className="content">
                <div className="flex flex-col">
                    <Navbar />
                    <Outlet />

                  <div className="mt-11">
                    <Hero />

                    <ConfectionaryPage />
                  </div>
                    
                </div>
                
            </div>
        </div>
      
    </main>
  )
}

export default Index
