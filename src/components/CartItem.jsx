import {useContext} from 'react'
import { FaSquareFull } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";
import { ShopCart } from './CartContext';

function CartItem({data}) {
    const {addToCart, removeFromCart, cartItems} = useContext(ShopCart)

  return (
    <div className='flex items-center justify-between my-4'>
        <div className='w-3/6'>
           <div className=' bg-slate-100 w-80 h-80 flex items-center place-self-center rounded-lg'>
                <img
                  src={data.image}
                  className='object-cover cursor-pointer  hover:drop-shadow-xl hover:scale-125 ease-in-out duration-300 w-[170px] mx-auto '
                  alt={data.title}
                />
            </div>
            <div></div>
        </div>
        <div className=' w-2/5 h-80'>
            <h3>{data.title}</h3>
            <div className='flex justify-between'>
                <p className='text-slate-300'>{data?.color ? data?.color : 'Alphine Green'}</p>
                <p className=' font-bold text-sm'>Available Color <span className='flex '>
                    <FaSquareFull className=' fill-slate-800'/>
                    <FaSquareFull className=' fill-red-700' />
                    <FaSquareFull className=' fill-amber-950' />
                </span>
                </p>
            </div>
            <p className='font-bold'>NGN{data?.price ? data.price.toLocaleString() : '2,000,000'}</p>
            <p className='line-through text-slate-300'>NGN{data?.discount ? data.discount.toLocaleString() : '2,400,000'}</p>
            <p className='text-slate-300'>{data.description}</p>
            <div className='flex justify-between w-20 my-3'>
                <button className=' bg-slate-100 px-1 text-[#004D75]' onClick={()=>removeFromCart(data.id)}><TiMinus /></button>
                <p>{cartItems[data.id]}</p>
                <button className=' bg-slate-100 px-1 text-[#004D75]' onClick={()=>addToCart(data.id)}><TiPlus /></button>
            </div>
        </div>
    </div>
  )
}

export default CartItem