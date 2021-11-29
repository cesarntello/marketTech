import React, {useState , useEffect} from 'react'
import { cardsProduct } from '../Cards/items'
import ItemList from '../Cards/ItemList'
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const {catId} = useParams()

        console.log(catId);
    
    useEffect(() => {
        
      const traerProductos = new Promise ((resolve) =>{
    setTimeout(()=>{ 
        resolve(cardsProduct)
    }, 1000);

  });

  traerProductos.then((res)=>{
      catId ? setItems(res.filter((item) => item.categoria === catId )) 
      : setItems(res);
      
  })
  }, [catId]);

    return (
        <div className="itemList">
       

       <ItemList className="productCard" items={items} />
            
        </div>
    )
}

export default ItemListContainer
