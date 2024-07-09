import { NavLink } from 'react-router-dom'
import logo from '../assets/GadgSmart.png'
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='container md:px-8 py-4'>  
      <div className='flex items-center md:place-content-between md:gap-8'>
        <div className=' max-w-28'>
        <img src={logo} alt="" />
        </div>   
        <div className='hidden lg:flex items-center gap-7'>
          <NavLink to='/' end className={({ isActive}) =>
          (isActive ? " bg-[#004D75] rounded-full p-1 text-white" : "hover:text-lg")
          }>Home</NavLink>
          <NavLink to='categories'>Categories</NavLink>
          <NavLink to=''>Whats New</NavLink>
          <NavLink to=''>Wishlist</NavLink>
        </div>
        <div className='flex items-center md:gap-8'>
          <div className=' bg-slate-300  rounded-full flex items-center px-3'>
          <input type="text" placeholder='Search Product' className=' bg-slate-300 rounded-full border-none outline-none' />
          <IoIosSearch />
          </div>
          <p className='flex items-center'> 
            <i ><CgProfile /></i> Account
          </p>
          <Link to='/cart' className='flex items-center'>
            <i><LiaShoppingCartSolid /></i> cart
          </Link>
        </div>
      </div> 
    </div>
  )
}

export default Header