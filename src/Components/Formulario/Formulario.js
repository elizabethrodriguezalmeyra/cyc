import React, { Component, useState, useContext } from "react";
import {Link, NavLink} from 'react-router-dom';
import {cartContext } from "../Context/cartContext";

  



export default  function Formulario (item) { 
  const {carrito, items, totalAmount, addItem } = useContext(cartContext);
    console.log("cantidad de items", item);
    return <>
        
        <tbody>item cantidad{item.cant}</tbody>
        <tbody>item categoris{item.category}</tbody>
        <tbody>item precio{item.price}</tbody>
        <tbody>item foto{item.pictureUrl}</tbody>
        
    </>
     
   }