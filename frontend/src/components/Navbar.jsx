import React from 'react'
import { Link } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className='max-w-screen-lg mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center md:gap-14 gap-4'>
          <Link to="/">
            <HiMiniBars3CenterLeft className='size-6' />
          </Link>

          <div className='relative sm:w-56 w-36 space-x-1'>
            <IoSearchOutline className='absolute inline-block left-4 inset-y-2' />
            <input type="text" placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-9 px-8 rounded-md focus:outline-none'  />
          </div>
        </div>

        <div className='flex items-center md:gap-2 gap-2'>
         <HiOutlineUser className='size-6'/>
         <button className='hidden sm:block'><MdOutlineFavoriteBorder className='size-6'/></button>
         
         <Link to='/cart' className='bg-primary rounded-md sm:px-6 py-1 flex items-center gap-1'>
            <HiOutlineShoppingCart className='size-6'/>
            <span>0</span>
         </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar