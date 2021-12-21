import React, {useContext, useState} from 'react'
import { CartContext, useBorrarItem } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import {Button, Grid, Box} from '@mui/material'


const Shop = () => {
const borrarItem = useBorrarItem()
const { cart, borrar,total } = useContext(CartContext)
const {form, getForm} = useState({nombre:'', email:''})

const llenarForm = (e) => {
    const { name, value} = e.target;
    getForm({
        ...form,
        [name]: value,
    })
}
const date = new Date()


// const total = () => {

//         const sumaTotal = cart.reduce((prev, curr)=> prev + curr.precio * curr.carrito, 0)
   
//         return sumaTotal
   
//    }
   
//    console.log(total())

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
                                <h4>C/U: ${producto.precio}</h4>
                                <p>Cantidad:{producto.carrito}</p>
                                 <Button variant="contained" onClick={() => borrarItem(producto)}>Eliminar producto</Button>

                                 <p> SubTotal: ${producto.precio * producto.carrito}</p>
                            </div>

                            

                    ))}
                   
                    
                    <h2>Total: ${total()}</h2>
                    <Button onClick={borrar}>Limpiar Carrito</Button>
                
                </div>
            </Grid>
        </Box>
        <Box>
            <form method='POST' >
                <input type="email" name='email' placeholder='email'onChange={llenarForm} >

                </input>
                        
                <input type="text" name='nombre' placeholder='Nombre'onChange={llenarForm} >
                </input>

                <button disbled ={
                    cart?.length === 0 ||
                    form.nombre === '' ||
                    form.email === '' }
                    >
                    Finalizar compra</button>
            </form>
        </Box>
        </>
    )
}

export default Shop
