import React, { Component, useState, useContext } from "react";
import {Link, NavLink} from 'react-router-dom';
import {cartContext } from "../Context/cartContext";
import TablaCart from '../TablaCart/TablaCart'



export default  function Cart () { 

  const {carrito,  mostrar, cantItem, addItem, removeItem, clear, precioTotal} = useContext(cartContext)
 
  
    return <>
    
        {carrito.length > 0 ?  <TablaCart /> :<Link to={'/Home'}className="navbar-brand" href="#">Aún no hay items en el Carrito. Volver al Menú</Link>}
       
         
        </>
   
   }
  