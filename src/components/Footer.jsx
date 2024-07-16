import logo from '../assets/GadgSmart.png'
import { IoIosSend } from "react-icons/io";
function Footer() {
  // style={{borderRadius: '70px 0 0 0'}}
  return (
    <div className='border-t-2 mt-12 md:ml-3 md:border md:rounded-tl-[70px]'>
      <div className='flex md:flex-row flex-col justify-between items-center py-4'>
        <div className='md:max-w-32 max-w-40'>
          <img src={logo} alt="" />
        </div>
        <div className='flex gap-8 py-4 px- items-center md:gap-30 lg:gap-60'>
        <div>
          <h2 className='font-bold'>Company</h2>
          <p>Career</p>
          <p> About us</p>
          <p>News</p>
        </div>
        <div>
          <h2 className='font-bold'>Shop</h2>
          <p>Categories</p>
          <p>Discount</p>
          <p>Recent item</p>
        </div>
        <div>
          <h2 className='font-bold'>Guid and help</h2>
          <p>Customer care</p>
          <p>Term and Condition</p>
          <p>Privacy</p>
        </div>
        </div>
        <div>
          <h2 className='font-bold'>Join our community</h2>
          <div className="flex border items-center rounded-full px-2">
          <input type="email" name="" id="" className=' outline-none' />
          <IoIosSend  className='bg-[#004D75] fill-white'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer