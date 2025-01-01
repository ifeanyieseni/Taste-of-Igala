import React from 'react'

const Hero = () => {
  return (
    <section
      id='home'
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-[url('/public/assets/Dishes.webp')]"
    >
      <div className='absolute w-full h-full  bg-black/60 ' />

      <div className='container mx-auto text-center py-4 px-6 md:px-20 lg:px-32 text-white relative z-10 '>
        <h2 className='text-4xl sm:text-6xl md:text-[82px] inline-block max-w-4xl font-semibold pt-20'>Discover the Taste of Igala Delicacies</h2>
        <a href='#menu' className='mt-16 px-8 py-3 rounded inline-block bg-orange-500'>View Menu</a>
      </div>
    </section>
  )
}

export default Hero
