import {createContext, useState} from 'react'
import {flashSale, recent} from '../constant'

export const ShopCart = createContext(null)

function CartContext({children}) {

    const productArray = [...flashSale, ...recent]

    const getDefaultCart = ()=>{
        let cart = {}
        for(let i =1; i < productArray.length + 1; i++){
            cart[i] = 0
        }
        return cart;
    }
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue ={cartItems, addToCart, removeFromCart, productArray}
    console.log(cartItems);

  return (
    <ShopCart.Provider value={contextValue}>
        {children}
    </ShopCart.Provider>
  )
}

export default CartContext