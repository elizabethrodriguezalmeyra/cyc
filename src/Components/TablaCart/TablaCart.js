import React, { Component, useState, useContext, useEffect} from "react";
import {cartContext } from "../Context/cartContext";
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';



export default function TablaCart () {
    const {carrito, items, totalAmount, totalPrice, addItem, removeItem, clear, precioTotal} = useContext(cartContext)
    const [terminar, setTerminar ] =  useState(false);
    const [orden, setOrden] = useState([]);
   
   return <>
       <table class="table">
          <thead>
            <tr>
          
                  
                  <th align="center">Cantidad</th>
                  <th align="center">Imagen</th>
                  <th align="center">Titulo</th>
                  <th align="center">Precio</th>
                  <th align="center">Eliminar</th>
            </tr>    
      </thead>
      <tbody>
        
        {carrito.map((row) => 
        <tr class="table-active">
                    <td align="center"> {row.cant} </td>
                    <td align="center"> <img src={row.pictureUrl}  width="80" height="80"></img> </td>
                    <td align="center"> {row.title} </td>
                    <td align="center"> {row.price} </td>
                    <td align="center"><button onClick={()=>removeItem(row.id)} className="btn btn-secondary"> <DeleteIcon color="secondary"/></button></td>
                  
                    </tr>   
                )}
       
        
        <tr>
          <th scope="row"></th>
          <td colspan="2" class="table-active">Total: {precioTotal()}</td> 
          <td></td>
        </tr>
      </tbody>
    </table>
        
          <button onClick={()=>clear()}>Vaciar</button>
          <button ><Link to={`/Checkout`}>Terminar Compra </Link>  </button>

         
    </>;
   
   }
  