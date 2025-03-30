import React from 'react'
import { href, Link } from 'react-router-dom';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatarImage from '../assets/avatar.png';

const Navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Orders', href: '/order' },
  { name: 'Cart Page', href: '/cart' },
  { name: 'Checkout', href: '/checkout' },
]

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const currentUser = 1; 
  return (
    <header className='max-w-screen-lg mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center md:gap-3 gap-3'>
        <div className='flex items-center md:gap-14 gap-4'>
          <Link to="/">
            <HiMiniBars3CenterLeft className='size-6' />
          </Link>

          <div className='relative sm:w-56 w-36 space-x-1'>
            <IoSearchOutline className='absolute inline-block left-4 inset-y-2' />
            <input type="text" placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-9 px-8 rounded-md focus:outline-none'  />
          </div>
        </div>

        <div className='relative flex items-center md:gap-2 gap-2'>
          <div>
            {
              currentUser? <>
              <button onClick={()=> setIsDropdownOpen(!isDropdownOpen) } className='relative'>
                <img src={avatarImage} alt="" className={`size-7 rounded-full ${currentUser? 'ring-2 ring-blue-500' : ''}`} />
              </button>
              {
                isDropdownOpen && (
                  <div className='absolute right-8 mt-2 bg-white shadow-md rounded-md z-40 w-32'>
                    <ul className='py-2'>
                      {
                        Navigation.map((item)=>(
                          <li key={item.name} className='hover:bg-gray-100 px-2 py-2 text-sm font-primary'>
                            <Link to={item.href} onClick={()=> setIsDropdownOpen(false)}>
                              {item.name}
                            </Link>                            
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )
              }
              </> : <Link to='/login'> <HiOutlineUser className='size-6'/> </Link> 
            }
          </div>
        
         <button className='hidden sm:block'><MdOutlineFavoriteBorder className='size-6'/></button>
         
         <Link to='/cart' className='bg-primary rounded-md sm:px-6 py-1 flex items-center gap-1'>
            <HiOutlineShoppingCart className='size-6'/>
            <span className='text-sm font-semibold sm:ml-1'>0</span>
         </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar