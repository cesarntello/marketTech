import React from 'react'
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/CardMedia';






export default function ItemDetail  ({product :{id, nombre, categoria, precio, img, stock, detalle}})  {


console.log(img)


    return (
        <div>
        <Grid container spacing={2}>
        <Grid item xs={8}>
  
            <h1> {nombre} </h1>    
            {/* <img scr={img} alt={nombre}/>     */}
    <ImageListItem key={img}>
      <img
        src={`${img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={nombre}
        
      />
    </ImageListItem>
            <h2>$  {precio}</h2>  
            <p>{detalle}</p>
            </Grid> 
        </Grid>
        </div>
    )
}

