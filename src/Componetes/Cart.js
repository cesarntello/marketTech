import React, {useContext, useState} from 'react'
import { CartContext, useBorrarItem } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import {Button, Grid, Box} from '@mui/material'


const Shop = () => {
const borrarItem = useBorrarItem()
// const totalCarrito = useTotalCarrito()
    const { cart, borrar } = useContext(CartContext)

    // const [totalCarrito, setTotalCarrito] = useState ([]) 
    
    // const totalTotal = () => {

    //     setTotalCarrito(  cart.map((producto) =>( producto.precio  * producto.carrito)
    //     )) 
    //  }


//    const totalCarrito = () => (   cart.map((producto) =>( producto.precio  * producto.carrito)))

    // const totalTotal = () => (totalCarrito.reduce((a + b) => a + b, 0))


    return (
        <>
        
        <Box className='gridCart' sx={{ flexGrow: 1 }}>
            <Grid  item xs={8}>
                <div>
                    {cart.length === 0 ? 
                    
                        <div>
                            <h1>Carro Vacio</h1> 
                                    <Link className='linkHome' to="/">
                                            <Button className='linkHome' variant="contained">Comprar</Button>
                                </Link>
                        </div> 
                        : 

                    <h1>Tu carro de compras</h1> }

                    {cart.map((producto) =>(

                            <div key={producto.id}>
                            
                                <h2>{producto.nombre}</h2>
                                <h4>${producto.precio}</h4>
                                <p>Cantidad:{producto.carrito}</p>
                                 <Button variant="contained" onClick={() => borrarItem(producto)}>Eliminar producto</Button>

                                 <p> SubTotal:{producto.precio * producto.carrito}</p>
                            </div>

                            

                    ))}
                   
                    
                    <p>Total</p>
                    <button onClick={borrar}>Limpiar Carrito</button>
                
                </div>
            </Grid>
        </Box>
        </>
    )
}

export default Shop
