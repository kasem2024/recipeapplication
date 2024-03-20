import React ,{useState} from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch ,AiFillTag} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdHelp,MdFavorite } from 'react-icons/md';

const Navbar = () => {
    const [navbar, setNavebar] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between
        items-center p-4'>
          {/* left side */}
        <div className='flex items-center'>
            <div onClick={(e)=> setNavebar(!navbar)} className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            Best<span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden md:flex item-center bg-gray-200 
                rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white 
                    rounded-full p-2'>Delivery</p>
                <p className='p-2 '>Pickup</p>
            </div>
        </div>
          {/* searchinput */}
          <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px ] sm:w-[400px] lg:w-[500px]'>
              <AiOutlineSearch size={20} />
              <input
                className='bg-transparent p-2 focus:outline-none'
                type="text"
                placeholder='Search Food Here '
              />
          </div>
          {/* Cart Button */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill/> Cart
        </button>
          {/* Mobile Menu */}
          {/* Overlay */}
          { navbar ?
            <div
            className='bg-black/50 fixed w-full h-screen z-10 top-0 left-0'>
            </div> :''
          }
          {/* Side Drawer menu  */}
        <div
              className={navbar ? "fixed top-0 left-0 w-[270px] h-screen bg-white z-10 duration-300"
                  : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 "}
        >
            <AiOutlineClose onClick={(e)=>setNavebar(false)} size={30}
                className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex items-center '><TbTruckDelivery size={30} className='mr-3'/> Orders</li>
                    <li className='text-xl py-4 flex items-center '><MdFavorite size={30} className='mr-3'/> Favorites</li>
                    <li className='text-xl py-4 flex items-center '><FaWallet size={30} className='mr-3'/> Wallet</li>
                    <li className='text-xl py-4 flex items-center '><MdHelp size={30} className='mr-3'/> Help</li>
                    <li className='text-xl py-4 flex items-center '><AiFillTag size={30} className='mr-3'/> Promotions</li>
                    <li className='text-xl py-4 flex items-center '><BsFillSaveFill size={30} className='mr-3'/> Best One</li>
                    <li className='text-xl py-4 flex items-center '><FaUserFriends size={30} className='mr-3'/> Invite Friends</li>
                </ul>
            </nav>
        </div>

    </div>
)
}

export default Navbar
