import { RiMapPin2Line, RiUserLocationLine } from "@remixicon/react"

const Contact = () => {
  return (
    <section className='bg-accent-secondary px-8 py-8'>
      <div className="hero-div">

        <div className="hero-title">
          <div className='text-2xl flex flex-col text-center gap-2'>
              <span className='text-[2rem] uppercase'>Welcome</span>
              <span>TO</span>
              <span className=''> 
                <span className='text-accent uppercase'>New</span>  
                <span className='text-orange-600 uppercase'>Guidance</span>  
              </span>
              
              <p className='text-[1rem] font-bold mt-4'>
              Though our kitchen is online, our care is deeply real. Send us a note—your voice is part of the meal.
              </p>
          </div>
        </div>
      </div>

      <h2 className='flex flex-col gap-1 w-full text-xl font-normal tracking-wider mb-5 items-center'>
        <span>Our Location</span>
        <div className='border-t-[3px] border-orange-400 w-[8rem]' /> 
      </h2>


      <div className="location ">
        <div className=" flex !items-center gap-2 text-[0.9rem] ">
          <RiMapPin2Line className='text-accent' />
            145, White Heart Lane - Storms End.
        </div>

        <div className=" flex items-center gap-2 text-[0.9rem]">
          <RiMapPin2Line className='text-accent' />
            145, White Heart Lane - Storms End.
        </div>

        <div className=" flex items-center gap-2 text-[0.9rem]">
          <RiMapPin2Line className='text-accent' />
            145, White Heart Lane - Storms End.
        </div>
      </div>
    </section>
  )
}

export default Contact