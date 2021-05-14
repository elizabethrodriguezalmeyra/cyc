import React, { Component, useState, useContext  } from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {Link, NavLink} from 'react-router-dom';
import {cartContext} from "../Context/cartContext";

function CartWidget ({icono, nombre}) {
  const {carrito, getCant} = useContext(cartContext);
  
  
    return <>
        <div>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
          <LocalGroceryStoreIcon />
          <Link to={`/Carrito`} className= "nav-link"></Link>
          </Badge>
        </IconButton>
        
      </div>
    </>;
   
   }
   export default CartWidget;