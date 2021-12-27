import { collection, getDoc, getDocs, getFirestore, orderBy, query } from 'firebase/firestore'
import React, {useContext, useConttext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import Mensaje from './ItemListContainer/Mensaje'


const Order = () => {
const [order, setOrder] = useState([])
const {userEmail} = useContext(CartContext)
const {email} = userEmail;

useEffect(() => {
    const db = getFirestore()
    const ref = query(collection(db, 'ticket'), orderBy('date'))
    getDocs(ref).then((snapshot) => {
        const orden = snapshot.docs.map((doc) => {
            const data = doc.data()
            const {date} = data
            const fecha = new Date(date.seconds * 1000)
            const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES',{
                dateStyle: 'full',
                timeStyle: 'short',
            }).format(fecha)
     
       return{
         id: doc.id,
         ...data,
         date: normalizedCreatedAt,
     }
   })
    
    setOrder(orden.filter((x) => x.buyer === email));
    })
}, [email])



    return (
        <div>
            {order?.length === 0 ? (
                <h1>Cargando...</h1>
            ):
            (<>
                <h1 style={{textAling: 'center'}}>
                    Ticket de tu compra
                </h1>
                {order.map ((ord) => (
                    <Mensaje key={ord.id} ord={ord}/>
            ))}
            </>
            )}
            <Link to="/">Volver a la Home</Link>
        </div>
    )

};
export default Order
