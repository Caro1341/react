import db from "../../../db/firebase-config.js"
import { doc, getDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./cardDetail.module.scss"
import { CartContext } from "../CartContext/index.jsx"

const CardDetail = () => {
   const {id}= useParams()
   const [item, setItem] = useState({})
   const [loading, setLoading] = useState(true)
   const [cart, setCart] = useContext(CartContext)
  const [error, setError] = useState(false)
   const getItem=async()=>{
    const itemDoc=doc(db,"items",id)
    const item =await getDoc(itemDoc)
    if (!item.exists()){
      setError(true)
      setLoading(false)
        
    }
    else{
      setItem(item.data())
      setLoading(false)
        
    }
   }
   
   useEffect(() => {
     getItem()
   }, [])
   
   if (error){
    return (
      <div className={styles.cardDetail}>
        <p className={styles.parrafoError}>El producto no existe</p> </div>
    )
   }

  return (
    <div className={styles.cardDetail}>
      <img
        className={styles.cardImg}
        src={item.imagen}
        alt={item.imagen}
      />

      <h2 className={styles.cardName}>{item.nombre}</h2>
      <p>
        {item.descripcion} Este producto esta recomendado para niños mayores
        de {item.edad_minima} años.
      </p>
      <p className={styles.cardPrice}>$ {item.precio}</p>
    </div>
  )
}

export default CardDetail