import heroImg from '../assets/hero-table-2.jpg'

const Hero = () => {
  return (
    <section className='hero-div'>
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
      <div className="hero-title">
        <div className='text-4xl flex flex-col text-center uppercase gap-8'>
            <span className='text-[4rem] text-orange-600'>Welcome </span>
            <span className='text-accent'> To New Guidance Restaurant</span>

            <p className='text-base'>
              New Guidance Restaurant offers a modern dining experience with a menu full of fresh, flavorful dishes made from locally sourced ingredients. Whether you're ordering for delivery or planning a visit, we bring you exceptional food and service. Explore our diverse offerings online and enjoy a memorable meal from the comfort of your home or at our inviting restaurant.
            </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
