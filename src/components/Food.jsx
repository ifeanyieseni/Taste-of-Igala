import React, { useState } from 'react';
import { dishes } from '../data/dishes';
import { Link } from 'react-router-dom';

const Food = () => {
  const [foods, setFoods] = useState(dishes);

 

  return (
    <section
      id='menu'
      className='container mx-auto  px-4 py-12 min-h-screen flex flex-col justify-center items-center'
    >
      <h1 className='text-zinc-700 font-medium text-4xl text-center mb-12'>
        Our Delicacies
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        {/* <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Chicken
            </button>
          </div>
        </div> */}

        {/* Filter Price */}
        {/* <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div> */}
      </div>

      {/* Display foods */}
      <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item) => (
          <div
            key={item.id}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 flex-col py-4 items-start gap-4 '>
              <p className='font-semibold text-zinc-700'>{item.name}</p>
              <Link
                to={`/food/${item.id}`}
                className='bg-gray-50 text-orange-500 p-2 rounded-lg'
              >
                View Details
              </Link>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  )
};

export default Food;
