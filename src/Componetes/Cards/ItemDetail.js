import { Link } from 'react-router-dom'
import React from 'react'
import ItemCount from '../ItemCount'
import { Button } from '@mui/material'





 const ItemDetail = ({id, nombre, categoria, precio, img, stock, detalle, onAdd, finalizar}) => {




    return (
      <>
        <div>
<img scr={img} alt={`${id}-${nombre}`} className="imgDetail" />
<section className="sectionDetail">
<h1>{nombre}</h1>
<p>{detalle}</p>
<h3>{precio}</h3>
<div>{finalizar ? (
              <>
                  <Link to="/cart"><Button  variant="contained" className="terminarCompra">Terminar compra</Button></Link>
              </>
              ) : (
              <> 
                  <ItemCount stock={stock} onAdd={onAdd}/>
              </>
              )}
</div>

</section>


        
        </div>
        </>
    )
}

export default ItemDetail