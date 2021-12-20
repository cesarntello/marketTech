import React, {useState , useEffect} from 'react'
import ItemList from '../Cards/ItemList'
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs} from 'firebase/firestore'


const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const {catId} = useParams();

        
    
    useEffect(() => {
         const db = getFirestore();
         const ref = collection(db, 'product');

         getDocs(ref).then((snapShot) => {
           const prod = snapShot.docs.map((doc) => {

            return {

                id: doc.id,
                 ...doc.data(),
                
            };
           });

           const categorias = prod.filter((i) => i.categoria === `${catId}`);
           catId === undefined ? setItems(prod) : setItems(categorias);
        
        });


  }, [catId]);
console.log(items)
    return (
    <>
        <div className="itemList">
       

       <ItemList className="productCard" items={Object.values(items)} />
            
        </div>
    </>
    )

    }
export default ItemListContainer
