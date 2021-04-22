import React, { Component, useState } from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import FastfoodIcon from '@material-ui/icons/Fastfood';

function CartWidget ({icono, nombre}) {
    
    return <>
        <div>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
          <LocalGroceryStoreIcon />
          </Badge>
        </IconButton>
        
      </div>
    </>;
   
   }
   export default CartWidget;