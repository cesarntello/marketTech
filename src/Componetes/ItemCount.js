import {Fragment, useState }from 'react'
import { Button } from '@mui/material'
// import CartWidget from './CartWidget'



const ItemCount = ({stock, onAdd}) => {

    const  [count, setCount] = useState(0)

    const incrementar = () =>{
        count !== stock && setCount(count + 1)
        if( count >= stock){ setCount (count + 0)}
    } 
    const decrementar = () =>{
        
        setCount(count - 1)
        if( count <= 0 ){ setCount (count - 0)}
    } 


    return (
        <Fragment>

            <Button  variant="outlined" onClick={incrementar}>+</Button>
            <h3 className="countText">{`${count}`}</h3>
            <Button  variant="outlined" onClick={decrementar} count={count}>-</Button> 
            <br/>
            <br/>
            <Button  variant="contained" onClick={() => onAdd (count)}  onAdd={onAdd}  disabled={count === 0}>Agregar al carrito  </Button>
            
        </Fragment>
    )
}

export default ItemCount
