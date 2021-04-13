import React from 'react';
import logo from '../../cc.png';


  const ItemListContainer = ({greeting, color}) => {
   console.log({color});
    return <>
        <div className={color} >
            <h3 background="red">{greeting}</h3>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </>;
   
   }
   export default ItemListContainer;
   