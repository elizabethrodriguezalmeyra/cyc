import React, { Component, useState} from "react";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import {useParams} from 'react-router-dom';


function ItemDetail ({producto}) {
    const {id } = useParams();
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
    
     <div className="row">
        <main id="items" className="col-sm-20 row">
            <div className="card col-sm-14">
                <div className="card-body">
                    <img  src={producto.pictureUrl} className="img-rounded" width="304" height="304"/>
                    <h3 className="card-title">{producto.title}</h3>
                    <h5 className="card-title">{producto.price}</h5>
                    <p className="card-text">{producto.description}</p>
                    <button onClick={restaItem} className="btn btn-secondary"> - </button> {numero} <button onClick={aumentoItem} className="btn btn-secondary" >+</button>
                    <p></p>
                    <p> <LocalGroceryStoreIcon/> <button onClick="" className="btn btn-secondary"> Agregar al Carrito </button> </p>    
                   
                </div>
                <h3> ID: {id} </h3>
            </div>
        </main>
    </div>        
      
    </>;
   
   }
   export default ItemDetail;