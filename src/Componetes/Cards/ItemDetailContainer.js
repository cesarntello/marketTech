import React, {useEffect, useState} from 'react'
import { cardsProduct } from './items'
import ItemDetail from './ItemDetail'
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';






const ItemDetailContainer = () => {

const [producto, setProducto] =  useState({})

useEffect(() => {
    const getProduct = new Promise ((res) => {
        setTimeout (() => {
            res (cardsProduct[0])
        }, 2000)


    }) 

getProduct.then((result) => {
    setProducto(result);
})

    
}, [])






    return (
        <div>
        <Container className="containerDetail" maxWidth="lg">
        {/* <Grid container spacing={2}> */}
            <ItemDetail {...producto} product={producto} />
        </Container>    
        {/* </Grid> */}
        </div>
    )
}

export default ItemDetailContainer
