import { useContext } from "react";
import { CartContext } from "../../CartContext";
import styles from "./cartWidget.module.scss";
import { Link, useParams } from "react-router-dom";

const CartWidget = () => {
  const [cart, setCart]=useContext(CartContext)
  const { precio } = useParams();
  const cantidad= cart.reduce((acc,actualmente)=>{
    return acc+actualmente.cantidad
  },0)
  const precioTotal=cart.reduce((acc,actualmente)=>{
    
    return (acc+actualmente.cantidad*actualmente.precio) 
  },0)

  
  return (
    <div className={styles.contenedorCarrito}>
      <p>Articulos en carrito: {cantidad}</p>
      <p>Total a pagar:$ {precioTotal}</p> 
      <Link to="/checkout"><button onClick={()=>console.log(cart)}>Finalizar compra</button></Link>
      
    </div>
  );
};

export default CartWidget;