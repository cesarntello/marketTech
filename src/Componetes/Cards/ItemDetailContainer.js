import React, {useEffect, useState, useContext} from 'react'
import { cardsProduct } from './items'
import ItemDetail from './ItemDetail'
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { getDoc, getFirestore, doc } from 'firebase/firestore';





const ItemDetailContainer = () => {


const [producto, setProducto] =  useState({})
const {itemId} = useParams()
const [finalizar, setFinalizar] = useState (false);
const {addToCart} = useContext(CartContext)
 

useEffect(() => {

const db = getFirestore()
const ref = doc(db, 'product', itemId)
getDoc(ref).then((snap)=>{
    setProducto({
        id: snap.id,
        ...snap.data(),
    })
})

// getProduct.then((result) => {
//     itemId && setProducto(result.find((item) => item.id === itemId)) 
    
// })

    
}, [itemId]);

const onAdd = (carrito) => {
    console.log({...producto , quantity: carrito})
    addToCart(producto, carrito) 
    setFinalizar(true);
    
}    


    return (
        <div>
        <Container className="containerDetail" maxWidth="lg">
        {/* <Grid container spacing={2}> */}
            <ItemDetail {...producto} onAdd={onAdd} finalizar={finalizar}/> 
        </Container>    
        {/* </Grid> */}
        </div>
    )
}

export default ItemDetailContainer
