import React  from "react";
import {useState} from 'react';


export const cartContext = React.createContext();

export default function Carrito  ({children}) {

    let defaultValue = [];
    //let items= [];
    let totalAmount= 0;
    let totalPrice= 0;


  const [carrito, setCarrito] = useState(defaultValue);

  
  function addCant( item, cant){
    const result= carrito.find(obj => obj.id === item.id)  // deberia PONERLE la cantidad a ese objeto
    console.log("resultado",result);
    result.cant = cant;
    
  }


  function isInCart(id){
     console.log("entro is in cart");
        return carrito.find(obj => obj.id === id)
  }

  function removeItem(id){  //le paso el id directamente
    const filtredData = carrito.filter(item => item.id !== id)
    setCarrito(filtredData)
   // items = filtredData;
    
  }

  function clear(){
    console.log("entro aca");    //limpio el carrito poniendole el arreglo vacio inicial
     setCarrito(defaultValue);
  }

  function total(item, cant){
     return totalPrice = totalPrice + (item.price * cant);
  }

  function addItem (item, cant) {   //agrego al carrito un nuevo item
   
        if(isInCart(item.id)){   //primero verifico si ya esta agregado
           
            addCant(item, cant);
        }
        else {
            carrito.push(item); //ver estp
            carrito.find(obj => obj.cant = cant)
            
        }
        total(item,cant);
        //console.log(totalPrice)
        setCarrito(carrito);
  }



 return (
    <cartContext.Provider value={{carrito,  totalAmount, totalPrice, addItem, removeItem, clear}}>
            {children}
    </ cartContext.Provider>
  )
}