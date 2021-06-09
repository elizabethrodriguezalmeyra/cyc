import React, { Component, useState, useContext, useEffect, useParams } from "react";
import {cartContext } from "../Context/cartContext";
import * as firebase from 'firebase/app'
import {getFirestore} from '../../firebase'



export default  function Orden (nombre) { 
    

  const {carrito,  precioTotal} = useContext(cartContext)
 
  const[ordenNueva, setOrden] = useState()
  const[realizado, setRealizado] = useState('false')

  useEffect(()=>{

    const db= getFirestore();
    
    const orden = db.collection('ordenes');
    const newOrden = {
      buyer: nombre,
      items: carrito,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      state: 'Orden Recibida',
      total: precioTotal()
    }
    orden.add(newOrden).then(({id})=>{
      setOrden(id)
    }).catch((error)=>{
        console.log("No se puedo guardar", error);
    }).finally(()=> {
      
    });


},[]);

      return <>
     
     {realizado ? <h1>El id de tu orden generado es: {ordenNueva}</h1> : <h1> Intente de nuevo </h1>}
        
         
        </>
   
   }