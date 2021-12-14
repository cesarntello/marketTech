import React, {useState , useEffect} from 'react'
import { cardsProduct } from '../Cards/items'
import ItemList from '../Cards/ItemList'
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs} from 'firebase/firestore'


const ItemListContainer = () => {


    // useEffect(() => {

    //     const db = getFirestore()
    //   const ref = collection(db, "product")
    //   getDocs(ref)
    //   .then((snapShot) => {
      
      
    //     snapShot.docs.map((doc) =>  console.log (doc.data()))
      
      
      
    //       })
            
    //   }, [])

    const [items, setItems] = useState([])

    const {catId} = useParams()

        console.log(catId);
    
    useEffect(() => {
         const db = getFirestore()
         const ref = collection(db, "product")

         getDocs(ref).then((snapShot) => {
            snapShot.docs.map((doc) =>  console.log (Object.values(doc.data())))
        })


//       const traerProductos = new Promise ((resolve) =>{
   
//         resolve(cardsProduct)
    

//   });

  getDocs(ref).then((snapShot)=>{
      catId ? setItems(snapShot.docs.filter((item) => item.categoria === catId )) 
      : 
      setItems(snapShot);
      
  })
  }, [catId]);

    return (
        <div className="itemList">
       

       <ItemList className="productCard" items={Object.values(items)} />
            
        </div>
    )
}

export default ItemListContainer
