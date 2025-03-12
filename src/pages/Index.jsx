import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Index = () => {
  return (
    <main className='relative'>
        <div className="md:mx-4 lg:mx-auto flex justify-between">
            <Sidebar />

            <div className="content">
                <div className="flex flex-col">
                    <Navbar />
                    <Hero />

                    <div className="mt-11 overflow-auto">
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. A itaque maiores voluptates minima velit ad dicta, nihil quis expedita in, nisi recusandae nesciunt laborum labore facere officiis mollitia sint? Exercitationem ratione, quos vero excepturi facere consequuntur maiores doloremque dolor doloribus natus mollitia, dolorem nihil quidem ipsa in, veniam ab soluta?
                    </div>
                </div>
                
            </div>
        </div>
      
    </main>
  )
}

export default Index
