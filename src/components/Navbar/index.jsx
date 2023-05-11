import {  useContext } from "react";
import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navbar = ({ logo }) => {
  const [cart, setCart]=useContext(CartContext)
  const cantidad= cart.reduce((acc,actualmente)=>{
    return acc+actualmente.cantidad
  },0)

  return (
    <nav className={styles.container}>
      <NavLink to="/">
        <img src={logo} className={styles.imgLogo} alt="logo" />
      </NavLink>
      <NavLink to="/" className={styles.items}>
        Inicio
      </NavLink>
      <NavLink to="/categoria/juguetes" className={styles.items}>
        Juguetes
      </NavLink>
      <NavLink to="/categoria/libros" className={styles.items}>
        Libros
      </NavLink>
      <NavLink to="/nosotros" className={styles.items}>
        Nosotros
      </NavLink>
      <NavLink to="/carrito" className={styles.items} >
        <img src="/img/carrito.png" alt="carrito de compras"  className={styles.carrito}/>
        {cantidad}
      </NavLink>
    </nav>
  );
};

export default Navbar;