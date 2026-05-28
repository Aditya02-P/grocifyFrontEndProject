import React from 'react'
import Grocery from "../../assets/grocery.png"
import Button from '../Button'
const Hero = () => {
  return (
    <section className=''>
      <div className='max-w-350 min-h-screen mx-auto px-10 flex items-center   '>
        {/* Hero Content */}
        <div className='flex-1 '>
          <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>
            Export Best Quality...
          </span>
          <h1 className='text-7xl font-bold mt-4'>Tasty Organic <span className='text-orange-400'>Fruites</span> & <span className='text-orange-400'>Veggies</span> In Your City</h1>
          <p className='text-zinc-600 text-lg text-w-[530px] mt-5 mb-10'>Bread for a high content of beneficial substances.Our products are fresh and high quality.</p>
          <Button text={"Shop now"}/>
        </div>

        {/* Hero Image */}
        <div className='flex-1'>
          <img src={Grocery} alt="" />
        </div>

      </div>
    </section>
  )
}

export default Hero