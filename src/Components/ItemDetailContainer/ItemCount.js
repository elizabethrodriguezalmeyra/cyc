import React, { Component, useState, useContext} from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import {useParams} from 'react-router-dom';
import {cartContext } from "../Context/cartContext";


export default function ItemCount (producto) {

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
        

    </>;
   
   }
  