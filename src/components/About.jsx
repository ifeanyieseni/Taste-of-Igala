import React from 'react'

const About = () => {
  return (
    <>
      <section class='text-gray-600 body-font overflow-hidden' id='about'>
        <div class='container px-5 py-24 mx-auto'>
          <h2 className='text-center mb-10 text-4xl font-semibold'>About Us</h2>
          <div class='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='ecommerce'
              class='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src='/assets/obo-irere.jpg'
            />
            <div class='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 class='text-sm title-font text-gray-500 tracking-widest'>
                Igala Cuisine
              </h2>
              <h1 class='text-gray-900 text-3xl  font-medium mb-1'>
                Explore mouth-watering Native Igala Dishes
              </h1>

              <p class='leading-relaxed'>
                Experience the rich and authentic flavors of Igala cuisine local
                dishes, straight from the heart of Igala Land, Kogi State
                Nigeria. From pepper soups that warm your soul to local stews
                and pounded yam that hit just right, explore mouth-watering
                native Igala dishes that bring tradition and taste together.
                It's not just food - it’s culture on a plate
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
