import { addDoc, collection, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState, useContext, useEffect } from 'react'

 export const CartContext = React.createContext()

export function CartProvider({children}) {
const [cart, setCart] = useState([])
const db = getFirestore()    
const ref = collection(db, 'product')
const refCart = collection(db, 'cartItems')



// useEffect(() => {

//     getDocs(refCart).then((snapShot) => {
//         setCart(snapShot.doc.map((doc) => ({id: doc.id,...doc.data()})))
//     })

// }, [])
const isOnCart = (id) => {
    const carro = cart.find((x) => x.id === id)
    if (carro !== undefined) {
        return true }
        else {
            return false
        }
    }



const addToCart = (product, carrito) => {
   
   if (isOnCart(product.id)){
       sumarCantidad(product, carrito)
   }
   else {
       setCart([...cart, {...product, carrito}])
   }
    addDoc(refCart, product, carrito)
    
}

const sumarCantidad = (product, carrito) => {
    const unid = [...cart];
    unid.forEach((x) =>  {
        // eslint-disable-next-line no-unused-expressions
        (x.id === product.id) & (x.carrito !== product.stock)
        ? (x.carrito +- carrito)
        : alert(
            'no hay mas stock'
            );
    });
};

const borrarItem = (carrito) =>{

    setCart(cart.filter(item => item.id  !== carrito.id))
}


const total = () => {

    const sumaTotal = cart.reduce((prev, curr)=> prev + curr.precio * curr.carrito, 0)

    return sumaTotal

}


const borrar = () =>{
    setCart ([])
}


return(
    <CartContext.Provider value={{addToCart, cart, borrar, borrarItem, total}}>
       {children}{console.log(cart)}
    </CartContext.Provider>
)

}

export function useBorrarItem(){
    return useContext(CartContext).borrarItem
}
