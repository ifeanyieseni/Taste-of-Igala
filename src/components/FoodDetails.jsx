import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'
import { dishes } from '../data/dishes'
const FoodDetails = () => {
  const { id } = useParams()
  const [isBookmarked, setIsBookmarked] = useState(false)

  const food = dishes.find((item) => item.id === parseInt(id))

  const shareUrl = window.location.href

  // Check if the recipe is already bookmarked
  useEffect(() => {
    if (!food) return // Ensure hook does not execute if food is not found

    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || []
    setIsBookmarked(savedRecipes.some((recipe) => recipe.id === food.id))
  }, [food])

  if (!food) return <p>Food not found</p>

  const handleCopy = () => {
    const recipeText = `
      ${food.name}
      
      Ingredients:
      ${food.recipe.ingredients.join(', ')}

      Procedure:
      ${food.recipe.procedure.join('. ')}`
    navigator.clipboard.writeText(recipeText)
    alert('Recipe copied to clipboard!')
  }

  const handleBookmark = () => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || []
    if (isBookmarked) {
      // Remove from bookmarks
      const updatedRecipes = savedRecipes.filter(
        (recipe) => recipe.id !== food.id
      )
      localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes))
      setIsBookmarked(false)
      alert('Recipe removed from bookmarks!')
    } else {
      // Add to bookmarks
      savedRecipes.push(food)
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes))
      setIsBookmarked(true)
      alert('Recipe bookmarked!')
    }
  }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h2 className='text-3xl font-bold'>{food.name}</h2>
      <img
        src={food.image}
        alt={food.name}
        className='w-full h-[300px] object-cover mt-4 rounded-lg'
      />

      {/* Share Buttons Section */}
      <div className='mt-6 flex space-x-4'>
        <FacebookShareButton url={shareUrl} quote={food.name}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={food.name}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={food.name}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      {/* Copy and Bookmark Buttons */}
      <div className='mt-6 flex space-x-4'>
        <button
          onClick={handleCopy}
          className='bg-gray-50 text-blue-500 px-4 py-2 rounded-lg border-0'
        >
          Copy Recipe
        </button>
        <button
          onClick={handleBookmark}
          className={`${
            isBookmarked ? 'bg-red-500' : 'bg-green-500'
          } text-white px-4 py-2 rounded-lg border-0`}
        >
          {isBookmarked ? 'Remove Bookmark' : 'Bookmark Recipe'}
        </button>
      </div>

      {/* Ingredients */}
      <div className='mt-6'>
        <h3 className='text-xl font-semibold'>Ingredients:</h3>
        <ul className='list-disc pl-6'>
          {food.recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Procedure */}
      <div className='mt-6'>
        <h3 className='text-xl font-semibold'>Procedure:</h3>
        <ol className='list-decimal pl-6'>
          {food.recipe.procedure.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default FoodDetails
