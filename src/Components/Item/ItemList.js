import React, { Component, useState } from "react";
import Item from './Item'
import './Item.css';

function ItemList ({productos}) {
    console.log(productos)
    return <>
    <div className="container-fluid">
      <div className="row">
        <main id="items" className="col-sm-12 row">
           
            {productos.map((item)=><Item id={item.id} title={item.title} price={item.price}  pictureUrl={item.pictureUrl} description={item.description}/>) }
           
        </main>
      </div>
    </div>
    </>
   
   }
   export default ItemList;