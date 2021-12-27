import React from 'react'

const Mensaje = ({ord}) => {
const nameprod = ord.items.map((x) => x.name)
const {buyer} = ord


    return (
        <div>
            <h2> Id de la compra: {ord.id}</h2>
            <h2> Fecha: {ord.date}</h2>
            <h2> Nombre del producto: {nameprod}</h2>
            <h2> email: {buyer}</h2>
        </div>
    )
}

export default Mensaje
