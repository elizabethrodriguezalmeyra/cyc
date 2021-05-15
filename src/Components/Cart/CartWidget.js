import React, { useContext  } from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom';
import {cartContext} from "../Context/cartContext";

function CartWidget ({icono, nombre}) {
  const {carrito } = useContext(cartContext);
  let numero = carrito.size;
  
    return <>
        <div>
        <IconButton color="inherit">
          <Badge badgeContent={numero} color="secondary">
          <LocalGroceryStoreIcon />
          <Link to={`/Carrito`} className= "nav-link"></Link>
          </Badge>
        </IconButton>
        
      </div>
    </>;
   
   }
   export default CartWidget;