import React from 'react'
import { Link } from 'react-router-dom'

const SavedRecipes=()=> {
  const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || []

  if (savedRecipes.length === 0) return <div className=' text-center mt-48 text-2xl h-screen'>No saved recipes yet!</div>

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h2 className='text-3xl font-bold mb-6'>Saved Recipes</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {savedRecipes.map((item) => (
          <div
            key={item.id}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
            </div>
            <div className='flex justify-between px-2 py-2'>
              <Link
                to={`/food/${item.id}`}
                className='text-orange-500 bg-orange-50 p-2 rounded-lg'
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default SavedRecipes