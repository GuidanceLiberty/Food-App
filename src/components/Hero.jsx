import heroImg from '../assets/hero-table-2.jpg'
import appetizer from '../assets/appetizer/appetizer-4.jpg'
import soup from '../assets/Local/local-soup.jpg'
import chinese from '../assets/chinese/chinese-8.jpg'
import vegan from '../assets/vegetarian/vegetarian-6.jpeg'
import italian from '../assets/italian/italian-12.jpg'
import continental from '../assets/continental/continental-7.jpg'
import drinks from '../assets/drinks/drink-4.jpg'
import confectioneries from '../assets/confectioneries/confectioneries-4.jpg'
import { NavLink } from 'react-router-dom'




const Hero = () => {
  return (
    <section className='bg-accent-secondary p-8 '>
      <div className="hero-div">
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>


      <div className="hero-title">
          <div className='text-2xl flex flex-col text-center gap-5'>
            <div className="">
            <span className='text-[2rem] uppercase text-accent'>New</span>
            <span className='text-[2rem] uppercase text-orange-600'>Guidance</span>
            </div>
              
              <span className=''> 
                <span className='text-accent'>Restaurant</span>  
                {/* <span className='text-orange-400'> Kitchen</span>   */}
              </span>
              
              <p className='text-[1rem] font-bold'>
              "NEW GUIDANCE: Fresh, flavorful, and unforgettable.Bringing gourmet dining to your doorstep.Your new go-to for every craving!"
              </p>
          </div>
        </div>
      </div>

      <h2 className='flex flex-col gap-3 w-full text-xl font-normal tracking-wider mb-5 items-center'>
        <span className=''>Our Food Categories</span>
        <div className="border-t-[3px] border-orange-400 w-[13rem]"></div>
      </h2> 

      <div className="hero-grids">

        <NavLink to={`/category-page/vegetarian`}>
        <div className="hero-grid">
          <div className='hero-grid-desc'>Vegan</div>
          <img src={vegan} alt="vegan" className='object-cover' /> 
        </div>
        </NavLink>

        <NavLink to={`/category-page/local`}>
        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Local</div>
          <img src={soup} alt="vegan" className='object-cover ' /> 
        </div>
        </NavLink>

        <NavLink to={`/category-page/chinese`}>
        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Chinese</div>
          <img src={chinese} alt="vegan" className='object-cover ' /> 
        </div>
        </NavLink>

        <NavLink to={`/category-page/appetizer`}>
        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Appetizer</div>
          <img src={appetizer} alt="vegan" className='object-cover ' /> 
        </div>
        </NavLink>

        <NavLink to={`/category-page/confectioneries`}>
        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Confectioneries</div>
          <img src={confectioneries} alt="vegan" className='object-cover ' /> 
        </div>
        </NavLink>

        <NavLink to={`/category-page/italian`}>
        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Italian</div>
          <img src={italian} alt="vegan" className='object-cover' /> 
        </div>
        </NavLink>

        <NavLink to={`/category-page/drinks`}>
        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Drinks</div>
          <img src={drinks} alt="vegan" className='object-cover' /> 
        </div>
        </NavLink>

        <NavLink to={`/category-page/continental`}>
        <div className="hero-grid"> 
          <div className='hero-grid-desc'>Continental</div>
          <img src={continental} alt="vegan" className='object-cover' /> 
        </div>
        </NavLink>

      </div>     
    </section>
  )
}

export default Hero
