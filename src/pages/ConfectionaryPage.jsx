import React from 'react'
import { confectioneries } from '../constants'

const ConfectionaryPage = () => {
  return (
    <section>
      <div className='text-2xl font-normal tracking-wider mb-6 flex flex-col justify-center items-center gap-1 '>
          <span>Confectioneries</span>
          <div className='border-t-[3px] border-orange-400 w-[12rem]'/>
        </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
          {
            confectioneries.map((item) => (
              <div key={item.id} className="grid-item">
                <img src={item.imgUrl} alt="" />
              </div>
            ))
          }
        
      </div>
    </section>
  )
}

export default ConfectionaryPage
