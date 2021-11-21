import React from 'react'
import ProductCard from '../Cards/Card'
import Grid from '@mui/material/Grid';


const ItemList = ({items}) => {

    
    
    return (
        <div className="itemList">
        <Grid container spacing={2}>
        
       { items.map(items =>(

       <ProductCard className="productCard" key={items.id} product={items}/>
            ))}
            </Grid>
        </div>
    )
}

export default ItemList
