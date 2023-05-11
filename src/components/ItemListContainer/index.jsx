import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "./itemListContainer.module.scss"
import { CartContext } from '../CartContext'

const ItemListContainer = ({ items }) => {
  const { categoryName } = useParams()
  const [filtrarItems, setFiltrarItems] = useState(items)
  const [cart, setCart] = useContext(CartContext)
  const { id } = useParams()

  const agregar = (id,precio,nombre) => {
    setCart((actualmenteEnCarrito) => {
      const estaEnCarrito = actualmenteEnCarrito.find((item) => item.id === id)
      if (estaEnCarrito) {
        return actualmenteEnCarrito.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...actualmenteEnCarrito, { id, cantidad: 1,precio:precio,nombre:nombre}]
      }
    })
  }
  const eliminar = (id) => {
    setCart((actualmenteEnCarrito) => {
      if (actualmenteEnCarrito.find((item) => item.id === id)?.cantidad === 1) {
        return actualmenteEnCarrito.filter((item) => item.id !== id)
      } else {
        return actualmenteEnCarrito.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  const getCantidadPorId = (id) => {
    return cart.find((item) => item.id === id)?.cantidad || 0
  }


  

  useEffect(() => {
    if (categoryName) {
      setFiltrarItems(items.filter((item) => item.categoria === categoryName))
    } else {
      setFiltrarItems(items)
    }
  }, [categoryName, items])

  return (
    <div className={styles.container}>
      {filtrarItems.map((item) => (
        <div className={styles.border} key={item.id}>
          <Link to={`/items/${item.id}`} className={styles.links}>
            <div className={styles.card}>
              <img src={item.imagen} alt={item.imagen} className={styles.cardImg} />
              <div className={styles.cardTexto}>
                <h2>{item.nombre}</h2>
                <p>$ {item.precio}</p>
              </div>
            </div>
          </Link>

            <p className={styles.cantidad}>Tiene ({getCantidadPorId(item.id)}) {item.nombre} en su carrito de compras </p>
            <button className={styles.botonAgregar} onClick={() => agregar(item.id,item.precio,item.nombre)}>
              Agregar al carrito 
            </button>
            {}
            {getCantidadPorId(item.id)>0&&(
              <button className={styles.botonAgregar} onClick={() => eliminar(item.id,item.precio)}>
              Eliminar del carrito 
            </button>
            )}

          
        </div>
      ))}
    </div>
  )
}

export default ItemListContainer