import heroImg from '../assets/new/hero-table-2.jpg'

const Hero = () => {
  return (
    <section className='hero-div'>
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
      <div className="hero-title">
        <div className='text-4xl flex flex-col text-center uppercase gap-8'>
            <span className='text-[4rem] text-orange-600'>Welcome </span>
            <span className=''> To New Guidance Restaurant</span>

            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae, iure aspernatur repellat quaerat sit!</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
