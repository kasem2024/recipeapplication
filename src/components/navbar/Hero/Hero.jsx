import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1100px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
            <div className='absolute  text-gray-200  max-h-[500px] w-full h-full bg-black/40
              flex flex-col justify-center'>
              <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font bold'> The <span className='text-orange-500'>Best</span></h1>
              <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font bold'> <span className='text-orange-500'>Foods</span>Delivered</h1>
            </div>
            <img className='w-full h-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </div>
    </div>
  )
}

export default Hero
