import React  from "react";
import {useState} from 'react';


export const cartContext = React.createContext();

export default function Carrito  ({children}) {

    let defaultValue = [];
  
    

     const [carrito, setCarrito] = useState(defaultValue)   
     
     let mostrar = carrito.length;
      
    
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
        
        if (isInCart(item.id)){   //primero verifico si ya esta agregad
          let id= item.id;
          const result = carrito.find(id => item.cant = cant)
          result.cant= cant
          setCarrito(carrito)
         
        }
        else{
          setCarrito([...carrito,{...item, "cant":cant}])
        }
       
       
        //setCarrito(carrito)
  }

 function precioTotal(){
   const precioTotal=carrito.reduce((a,b)=>(a+(b.price*b.cant)),0)
   console.log("precio total es", precioTotal)
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