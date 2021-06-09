import React, { useContext, useEffect, useState } from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom';
import {cartContext} from "../Context/cartContext";

function CartWidget ({icono, nombre}) {
  const {carrito,  mostrar, cantItem, addItem, removeItem, clear, precioTotal} = useContext(cartContext)

  const [cant, setCant] = useState(0)
 
  useEffect(()=>{
       setCant(()=>cantItem());
       
}, 0);


    return <>
        <div>
       
        <IconButton color="inherit">
          <Badge badgeContent={cantItem()} color="secondary">
          <LocalGroceryStoreIcon />
          <Link to={`/Carrito`} className= "nav-link"></Link>
          </Badge>
        </IconButton>
        
      </div>
    </>;
   
   }
   export default CartWidget;