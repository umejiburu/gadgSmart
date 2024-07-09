import {useContext} from 'react'
import { ShopCart } from '../components/CartContext'
import { CartItem, RecentSale } from '../components'
import { Link } from 'react-router-dom'

function Cart() {
    const {cartItems, productArray} = useContext(ShopCart)
  return (
     <div className='container px-8'>
        {productArray.map((product) => {
            if(cartItems[product.id] !== 0){
                return <CartItem key={product.id} data={product}/>
            }
        })}
        <Link to='/checkout' className='text-white border py-1 px-96 bg-[#004D75] w-full rounded-full'>Proceed to checkout</Link>
        <RecentSale heading='More to explore' />
    </div>
   
  )
}

export default Cart