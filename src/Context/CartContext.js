import React from 'react'
import { useState, useContext } from 'react'
// import { onAdd} from '../Cards/ItemDetailContainer';
// import {useContext} from 'react'

 export const CartContext = React.createContext()

export function CartProvider({children}) {
const [cart, setCart] = useState([])
    
const addToCart = (producto, carrito) => {
    setCart([...cart, {...producto, carrito}])
}

const borrarItem = (carrito) =>{

    setCart(cart.filter(item => item.id  !== carrito.id))
}


// const totalCarrito = (carrito) =>{

//     setCart(cart.findIndex( item => item.precio * carrito.quantity ))

// }



const borrar = () =>{
    setCart ([])
}


return(
    <CartContext.Provider value={{addToCart, cart, borrar, borrarItem}}>
       {children}{console.log(cart)}
    </CartContext.Provider>
)

}

export function useBorrarItem(){
    return useContext(CartContext).borrarItem
}
// export function useTotalCarrito(){
//     return useContext(CartContext).totalCarrito
// }