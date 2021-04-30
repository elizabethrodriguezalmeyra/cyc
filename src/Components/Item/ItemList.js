import React  from "react";
import Item from './Item'
import './Item.css';

function ItemList ({productos}) {
    
    return <>
    <div className="container-fluid">
      <div className="row">
        <main id="items" className="col-sm-12 row">
           
            {productos.map((item)=>
            <Item item = {item} /> )}
           
        </main>
      </div>
    </div>
    </>
   
   }
   export default ItemList;