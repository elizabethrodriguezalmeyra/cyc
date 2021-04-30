import React, { Component, useState } from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import {Link, NavLink} from 'react-router-dom';

function Item ({item}) { //solo muestra info y suma al futuro carrito
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

                <div className="card col-sm-4">
                    <div className="card-body">
                        <img  src={item.pictureUrl} className="img-rounded" width="304" height="304"/>
                        <h3 className="card-title">{item.title}</h3>
                        <h5 className="card-title">{item.price}</h5>
                        <NavLink to={`/Item/${item.id}`} className="btn btn-secondary"> Detalles </NavLink>
                        <p></p>
                        <button onClick={restaItem} className="btn btn-secondary"> - </button> {numero} <button onClick={aumentoItem} className="btn btn-secondary" >+</button>
                        <p></p>
                        <p> <LocalGroceryStoreIcon/> <button onClick="" className="btn btn-secondary"> Agregar al Carrito </button> </p>
                        
                    </div>
                </div>
               
            
  


        
      


        </>
     
    }
   export default Item;