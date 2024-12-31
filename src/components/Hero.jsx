import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-3xl sm:text-5xl md:text-6xl font-bold'>
            Discover the <span>Taste of Igala</span>{' '}
          </h1>
          <p className='px-4 text-xl md:text-4xl mt-3'>
            {' '}
            Explore mouth-watering Native Dishes
          </p>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='/assets/Dishes.webp'
          alt='/'
        />
      </div>
    </div>
  )
}

export default Hero
