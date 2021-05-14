import React, { Component, useState, useContext} from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';



export default function Button (tipo, id, accion , name)  {
    


    return <>
        {tipo} <button id={id} onClick={accion}  className="btn btn-secondary">{name}> </button>    
        

    </>;
   
   }
  


