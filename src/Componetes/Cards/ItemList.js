import React, {useState , useEffect} from 'react'
import ProductCard from '../Cards/Card'
import { cardsProduct } from '../Cards/items'


const ItemList = () => {

    const [items, setItems] = useState([])


    
    useEffect(() => {
        
      const traerProductos = new Promise ((resolve, reject) =>{
    setTimeout(()=>{ resolve(cardsProduct)}, 2000)

  })

  traerProductos
  .then((res)=>{
      setItems(res)
      console.log(res)
  })
  .catch((error) =>{
      console.log(error)
  }) 
        

    }, [])

 
  
    return (
        <div className="itemList">
       { items.map(items =>(

       <ProductCard className="productCard" key={items.id} product={items}/>
            ))}
        </div>
    )
}

export default ItemList
