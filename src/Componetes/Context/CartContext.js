

import React from 'react'
import { useState } from 'react'
// import { onAdd} from '../Cards/ItemDetailContainer';
// import {useContext} from 'react'

 export const CartContext = React.createContext()

export function CartProvider({children}) {
const [cart, setCart] = useState([])
    
const addToCart = (producto, carrito) => {
    setCart([...cart, {...producto, carrito}])
}



return(
    <CartContext.Provider value={{addToCart, cart}}>
       {children}{console.log(cart)}
    </CartContext.Provider>
)

}


