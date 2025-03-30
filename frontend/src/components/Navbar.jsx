import React from 'react'
import { Link } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className='max-w-screen-lg mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center md:gap-14 gap-4'>
          <Link to="/">
            <HiMiniBars3CenterLeft />
          </Link>

          <div className='relative sm:w-56 w-36 space-x-1'>
            <IoSearchOutline className='absolute inline-block left-4 inset-y-2' />
            <input type="text" placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-9 px-8 rounded-md focus:outline-none'  />
          </div>
        </div>

        <div>NAv items</div>
      </nav>
    </header>
  )
}

export default Navbar