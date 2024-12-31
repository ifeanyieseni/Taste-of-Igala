import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Food from './components/Food'
import FoodDetails from './components/FoodDetails'
import Home from './components/Home'
import SavedRecipes from './components/SavedRecipes'
import Footer from './components/Footer'

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/food' element={<Food />} />
          <Route path='/food/:id' element={<FoodDetails />} />
          <Route path='/saved-recipes' element={<SavedRecipes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
