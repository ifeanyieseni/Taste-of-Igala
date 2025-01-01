import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Link as NavLink } from 'react-router-dom'
import { BsFillSaveFill } from 'react-icons/bs'
import { MdMenu, MdClose } from 'react-icons/md'

const menuItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Menu', to: 'menu' },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed top-0 left-0 w-full z-40'>
      <div className='container mx-auto flex justify-between items-center py-4 md:my-5 px-6 md:px-20 lg:px-32 bg-black/50 backdrop-blur-lg backdrop-brightness-125 md:border md:border-white/20  md:rounded-lg shadow-lg'>
        <NavLink to={'/'} className='text-xl text-gray-50'>
          Igala Cuisine
        </NavLink>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-7 text-white'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className='cursor-pointer hover:text-gray-200'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <NavLink
          to={'/saved-recipes'}
          className='hidden md:flex items-center gap-3 bg-white px-8 py-2 rounded-full'
        >
          <BsFillSaveFill size={20} />
          <span className='text-orange-500'>Saved</span>
        </NavLink>

        {/* Hamburger Menu */}
        <div
          className='md:hidden text-white cursor-pointer'
          onClick={toggleNav}
        >
          {nav ? <MdClose size={30} /> : <MdMenu size={30} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            nav ? 'block' : 'hidden'
          } absolute top-[100%] left-0 w-full   py-8 px-6 md:hidden bg-black/50 backdrop-blur-lg backdrop-brightness-125   shadow-lg text-center `}
        >
          <ul className='flex flex-col gap-4 mb-4 text-white'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={toggleNav}
                  className='cursor-pointer hover:text-gray-200'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <NavLink
            to={'/saved-recipes'}
            onClick={toggleNav}
            className='flex items-center gap-1 bg-white justify-center px-8 py-2 rounded-full max-w-[135px] mx-auto '
          >
            <BsFillSaveFill size={16} />
            <span className='text-orange-500'>Saved</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
