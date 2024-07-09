import logo from '../assets/GadgSmart.png'
import { IoIosSend } from "react-icons/io";
function Footer() {
  return (
    <div className='border mt-12 ml-3' style={{borderRadius: '70px 0 0 0'}}>
      <div className='flex justify-between items-center py-4'>
        <div className='max-w-32'>
          <img src={logo} alt="" />
        </div>
        <div>
          <h3>Company</h3>
          <p>Career</p>
          <p> About us</p>
          <p>News</p>
        </div>
        <div>
          <h3>Shop</h3>
          <p>Categories</p>
          <p>Discount</p>
          <p>Recent item</p>
        </div>
        <div>
          <h3>Guid and help</h3>
          <p>Customer care</p>
          <p>Term and Condition</p>
          <p>Privacy</p>
        </div>
        <div>
          <h3>Join our community</h3>
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