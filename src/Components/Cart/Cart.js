import React, { Component, useState, useContext } from "react";
import {Link, NavLink} from 'react-router-dom';
import {cartContext } from "../Context/cartContext";
import DeleteIcon from '@material-ui/icons/Delete';



export default  function Cart () { 
  
  const {carrito, items, totalAmount, totalPrice, addItem, removeItem, clear} = useContext(cartContext);
  let total = 0
    return <>
        <table class="table">
          <thead>
            <tr>
          
                  
                  <th align="center">Cantidad</th>
                  <th align="center">Categoria</th>
                  <th align="center">Descripcion</th>
                  <th align="center">Precio</th>
                  <th align="center">Eliminar</th>
            </tr>    
      </thead>
      <tbody>
        
        {carrito.map((row) => 
        <tr class="table-active">
                    <td align="center"> {row.cant} </td>
                    <td align="center"> {row.category} </td>
                    <td align="center"> {row.description} </td>
                    <td align="center"> {row.price} </td>
                    <td align="center"><button onClick={()=>removeItem(row.id)} className="btn btn-secondary"> <DeleteIcon color="secondary"/></button></td>
                    {total= total + (row.price*row.cant)}
                    </tr>   
                )}
       
        
        <tr>
          <th scope="row"></th>
          <td colspan="2" class="table-active">Total: {total}</td> 
          <td></td>
        </tr>
      </tbody>
    </table>
        
          <button onClick={()=>clear()}>Vaciar</button>
      

        </>
   
   }
  