import React, { Component, useState, useEffect, useContext} from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import {useParams} from 'react-router-dom';
import {cartContext } from "../Context/cartContext";
import ItemCount from "./ItemCount";
import {Link, NavLink} from 'react-router-dom';


function ItemDetail ({producto}) {
    const {carrito, items, totalAmount, addItem } = useContext(cartContext);
    
    let numero =0 ;
    let boton = document.getElementById('boton-compra')
   /* useEffect(()=>{
        window.addEventListener('click',onAdd);
        return ()=>{
          window.removeEventListener(onAdd)
        }
      },[])
    
    function onAdd(){
        alert('hax hecoh click');
    }


 //windows.addEventListener('onAdd', onAdd)
*/
    return <>
    
     <div className="row">
        <main id="items" className="col-sm-20 row">
            <div className="card col-sm-14">
                <div className="card-body">
                    <img  src={producto.pictureUrl} className="img-rounded" width="304" height="304"/>
                    <h3 className="card-title">{producto.title}</h3>
                    <h5 className="card-title">{producto.price}</h5>
                    <p className="card-text">{producto.description}</p>
                    <ItemCount/>
                    <p> <LocalGroceryStoreIcon/> <button onClick={()=>addItem(producto, numero)} className="btn btn-secondary">Agregar al carrito  </button> </p>
                </div>
               
            </div>
        </main>
    </div>        
      
    </>;
   
   }
   export default ItemDetail;