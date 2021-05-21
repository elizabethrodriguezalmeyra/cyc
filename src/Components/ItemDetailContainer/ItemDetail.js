import React, { Component, useState, useEffect, useContext} from "react";
import {cartContext } from "../Context/cartContext";
import ItemCount from "./ItemCount";
import {NavLink} from 'react-router-dom';


function ItemDetail ({producto}) {
    const {carrito, addItem } = useContext(cartContext);
    const [show, setShow] = useState(true)

   
    const onAdd = (count)=>{
        console.log("este es el item");
        addItem(producto, count )
        setShow(!show)
    }


    const item = producto;
  
    return <>
    
     <div className="row">
        <main id="items" className="col-sm-20 row">
            <div className="card col-sm-14">
                <div className="card-body">
                    <img  src={producto.pictureUrl} className="img-rounded" width="304" height="304"/>
                    <h3 className="card-title">{producto.title}</h3>
                    <h5 className="card-title">${producto.price}</h5>
                    <p className="card-text">{producto.description}</p>
                    {show ? <ItemCount onAdd= {onAdd}/> : <button className="btn btn-secondary"><NavLink to={`/Carrito`}  >TerminarCompra </NavLink> </button>  }
                    
                   
                </div>
               
            </div>
        </main>
    </div>        
      
    </>;
   
   }
   export default ItemDetail;