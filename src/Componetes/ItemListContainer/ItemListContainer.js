import React, {useState , useEffect} from 'react'
import { cardsProduct } from '../Cards/items'
import ItemList from '../Cards/ItemList'

const ItemListContainer = () => {

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
       

       <ItemList className="productCard" items={items} />
            
        </div>
    )
}

export default ItemListContainer
