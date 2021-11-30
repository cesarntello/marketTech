import React, {useEffect, useState} from 'react'
import { cardsProduct } from './items'
import ItemDetail from './ItemDetail'
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';






const ItemDetailContainer = () => {


const [producto, setProducto] =  useState({})
const {itemId} = useParams()
const [finalizar, setFinalizar] = useState (false);
console.log(itemId)

useEffect(() => {
    const getProduct = new Promise ((res) => {
        setTimeout (() => {
            res(cardsProduct)
        }, 1000)


    }) 

getProduct.then((result) => {
    itemId && setProducto(result.find((item) => item.id === itemId)) 
    console.log()
})

    
}, [itemId]);

const onAdd = (carrito) => {
    console.log({...producto , quantity: carrito})
    setFinalizar(true);
}    




    return (
        <div>
        <Container className="containerDetail" maxWidth="lg">
        {/* <Grid container spacing={2}> */}
            <ItemDetail {...producto} onAdd={onAdd} finalziar={finalizar}/>
        </Container>    
        {/* </Grid> */}
        </div>
    )
}

export default ItemDetailContainer
