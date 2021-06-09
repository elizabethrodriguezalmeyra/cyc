import React, { Component, useState, useContext, useEffect} from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import {useParams, useEffects} from 'react-router-dom';
import {cartContext } from "../Context/cartContext";


export default function ItemCount ({onAdd}) {

    const {carrito, items, totalAmount, addItem } = useContext(cartContext);
    
   
  
     const [numero, setNumero] = useState(1);
        const aumentoItem = () => {
          setNumero(numero + 1);
        };
        const restaItem = () => {
            if(numero > 1) {
          setNumero(numero- 1);
            }
        };
   
    return <>
        <button onClick={restaItem} className="btn btn-secondary"> - </button> {numero} <button onClick={aumentoItem} className="btn btn-secondary" >+</button>       
        <p> <LocalGroceryStoreIcon/> <button id="botonClick" onClick={()=>onAdd(numero)} className="btn btn-secondary"> Agregar al carrito </button> </p>
       
    </>;
   
   }
  