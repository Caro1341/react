import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const Checkout = () => {
    const [cart]=useContext(CartContext)
    const precioTotal=cart.reduce((acc,actualmente)=>{
    
        return (acc+actualmente.cantidad*actualmente.precio) 
      },0)

    if(cart.lenght===0){
        return <p>No has seleccionado ningun producto</p>
    }
  return (
    <div><p>Detalle de compra:</p>
    <ul >{cart.map(item=>(
        <li key={item.id}>
            {item.nombre} - cantidad: {item.cantidad} - ${item.precio}
        </li>
        
    ))} </ul>
    <p>Total: $ {precioTotal}</p> </div>
  )
}

export default Checkout