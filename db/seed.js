import { collection,addDoc } from "firebase/firestore";
import db from "./firebase-config.js"
import productos from "../productos.js"

const itemsRef= collection(db,"items")

const promesas=productos.map(producto=>addDoc(itemsRef,producto))

Promise.all(promesas)
.then(()=>{
    console.log("done")
    process.exit(0)
})