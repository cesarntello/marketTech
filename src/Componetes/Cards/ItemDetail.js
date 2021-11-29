import React from 'react'
// import Grid from '@mui/material/Grid';
// import ImageListItem from '@mui/material/CardMedia';






 const ItemDetail = ({id, nombre, categoria, precio, img, stock, detalle}) => {



console.log(categoria)

    return (
        <div>
<img scr={img} alt={`${id}-${nombre}`} className="imgDetail" />
<section className="sectionDetail">
<h1>{nombre}</h1>
<p>{detalle}</p>
<h3>{precio}</h3>
</section>


        {/* <Grid container spacing={2}>
        <Grid item xs={8}>
  
            <h1> {nombre} </h1>    
          
    <ImageListItem key={img}>
      <img
        src={`${img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={`${id}-${nombre}`}
        
      />
    </ImageListItem>
            <h2>$  {precio}</h2>  
            <p>{detalle}</p>
            </Grid> 
        </Grid> */}
        </div>
    )
}

export default ItemDetail