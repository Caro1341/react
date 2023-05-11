import React, { useState } from 'react'

const Form = ({ getItems,itemsRef}) => {
    const [inputNombre, setInputNombre] = useState("")
    const [inputPrecio, setInputPrecio] = useState("")

    
    const addItem=async(e)=>{
        console.log("addItem")
        e.preventDefault()
        const item={
          nombre:inputNombre,
          precio:inputPrecio
        }
        await addDoc(itemsRef,item);
        getItems()
      }
  return (
    <form onSubmit={addItem}>
<input type="text" placeholder='nombre' onChange={(e)=>setInputNombre(e.target.value)} value={inputNombre}/>
<input type="text" placeholder='precio' onChange={(e)=>setInputPrecio(e.target.value)} value={inputPrecio}/>
<button type="submit">Agregar</button>
</form>
  )
}

export default Form

