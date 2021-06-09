import React  from "react";
import {useState} from 'react';


export const cartContext = React.createContext();

export default function Carrito  ({children}) {

    let defaultValue = [];
  
    const [carrito, setCarrito] = useState(defaultValue)   
     
     let mostrar = carrito.length;
      
    
  function isInCart(id){
  
        return carrito.find(obj => obj.id === id)
  }

  function removeItem(id){ 
    const filtredData = carrito.filter(item => item.id !== id)
    setCarrito(filtredData)
    
  }

  function clear(){
    //limpio el carrito poniendole el arreglo vacio inicial
     setCarrito(defaultValue);
  }

 

  function addItem (item, cant) {   //agrego al carrito un nuevo item
        
        if (isInCart(item.id)){   //primero verifico si ya esta agregad
          let id= item.id;
          const result = carrito.find(id => item.cant = cant)
          result.cant= cant
          setCarrito(carrito)
         
        }
        else{
          setCarrito([...carrito,{...item, "cant":cant}])
        }
       
       
      
  }

 function precioTotal(){
   const precioTotal=carrito.reduce((a,b)=>(a+(b.price*b.cant)),0)
  
   return precioTotal;
   
  }

  function cantItem(){
    
    const cantItem = carrito.reduce((a,b)=>(a+b.cant),0);
    return cantItem;
  }


 return (
    <cartContext.Provider value={{carrito,  mostrar, cantItem, addItem, removeItem, clear, precioTotal }}>
            {children}
    </ cartContext.Provider>
  )
}