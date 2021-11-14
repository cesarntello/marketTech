import {Fragment, useState }from 'react'
import { Button } from '@mui/material'

const stockProduct = 10

const ItemCount = ({stock, initial, onAdd}) => {

    const  [count, setCount] = useState(0)

    const incrementar = () =>{
        setCount(count + 1)
        if( count >= stockProduct){ setCount (count + 0)}
    } 
    const decrementar = () =>{
        
        setCount(count - 1)
        if( count <= 0 ){ setCount (count - 0)}
    } 

    return (
        <Fragment>

            <Button  variant="outlined" onClick={incrementar}>+</Button>
            <h3 className="countText">{`${count}`}</h3>
            <Button  variant="outlined" onClick={decrementar}>-</Button>
        </Fragment>
    )
}

export default ItemCount
