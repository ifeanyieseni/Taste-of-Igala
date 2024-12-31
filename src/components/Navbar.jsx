import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-gray-50 shadow-sm'>
      {/* Left side */}
      <div className='flex items-center'>
       
        <Link to={'/'} className='text-xl sm:text-3xl lg:text-4xl px-2'>
          Taste Of <span className='font-bold'>Igala</span>
        </Link>
       
      </div>

     
     
      <Link
        to={'/saved-recipes'}
        className='bg-black text-white flex items-center py-2 rounded-full px-3'
      >
        <BsFillSaveFill size={20} /> Saved
      </Link>
    

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
              <MdFavorite size={25} className='mr-4' /> Favorites
            </li>
            <li className='text-xl py-4 flex'>
              <FaWallet size={25} className='mr-4' /> Wallet
            </li>
            <li className='text-xl py-4 flex'>
              <MdHelp size={25} className='mr-4' /> Help
            </li>
            <li className='text-xl py-4 flex'>
              <AiFillTag size={25} className='mr-4' /> Promotions
            </li>
            <li className='text-xl py-4 flex'>
              <BsFillSaveFill size={25} className='mr-4' /> Best Ones
            </li>
            <li className='text-xl py-4 flex'>
              <FaUserFriends size={25} className='mr-4' /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default Navbar;
