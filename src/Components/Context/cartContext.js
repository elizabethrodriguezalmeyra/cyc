import React  from "react";
import {useState} from 'react';


export const cartContext = React.createContext();

export default function Carrito  ({children}) {

    let defaultValue = [];
    let totalPrice= 0;
    

     const [carrito, setCarrito] = useState(defaultValue)   
     
     let mostrar = carrito.length;
     let cantItems = 0; 
    
  function isInCart(id){
    // console.log("entro is in cart");
        return carrito.find(obj => obj.id === id)
  }

  function removeItem(id){  //le paso el id directamente
    const filtredData = carrito.filter(item => item.id !== id)
    setCarrito(filtredData)
   // items = filtredData;
    
  }

  function clear(){
    //console.log("entro aca");    //limpio el carrito poniendole el arreglo vacio inicial
     setCarrito(defaultValue);
  }

 

  function addItem (item, cant) {   //agrego al carrito un nuevo item
   
        if (!(isInCart(item.id))){   //primero verifico si ya esta agregad
          carrito.push(item); //ver esto!!!!
        }
      
        let id= item.id
        carrito.find(id => item.cant = cant)           
        setCarrito(carrito);
       
  }

 function verItems(){
   carrito.forEach(item => cantItems += item.cant)
   console.log(cantItems)
  return (cantItems/2);


 }


 return (
    <cartContext.Provider value={{carrito,   totalPrice, mostrar, cantItems, addItem, removeItem, clear, verItems }}>
            {children}
    </ cartContext.Provider>
  )
}