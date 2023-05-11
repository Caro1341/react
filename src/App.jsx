import './App.css'
import db from "../db/firebase-config"
import { getDocs,collection, addDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Form from './components/form'
import ItemListContainer from './components/ItemListContainer'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import CartDetail from './components/CardDetail'
import Footer from "./components/Footer"
import Navbar from './components/Navbar'
import Nosotros from './components/Nosotros'
import CartWidget from './components/Navbar/CartWidget'
import CartProvider from './components/CartContext'
import Checkout from './components/Checkout'

function App() {
  const [items, setItems] = useState([])
  const itemsRef=collection(db,"items")
  const [loading, setLoading] = useState(true)
  
  

  const getItems= async()=>{
    const itemsCollection=await getDocs(itemsRef)
    const items=itemsCollection.docs.map(doc=>({...doc.data(),id:doc.id}))
    
    setItems(items)
    setLoading(false)
  }

  
useEffect(()=>{
  getItems()
 },[])

 
 if (loading){
  return <div className="loading"><span className="loader"></span></div>
 }

  return (
    <CartProvider
    >
      <Navbar logo="../img/icono.png" /><div>
      
      <Routes>
        <Route path="/" element={<Navigate to="/items" />} />
        <Route path="/items" element={<ItemListContainer items={items}/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/carrito" element={<CartWidget/>}></Route>
        <Route path="/items/:id" element={<CartDetail/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route
            path="/categoria/:categoryName" 
            element={<ItemListContainer items={items} />}
          />
      </Routes>
      <Form getItems={getItems} itemsRef={itemsRef}/>
      
    </div>
    <Footer
     /></CartProvider>
    
  )
}

export default App
