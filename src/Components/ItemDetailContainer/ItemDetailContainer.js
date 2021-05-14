import React, {useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


  function ItemDetailContainer () {
    const [ items, setItems ] = useState([])

    useEffect(()=>{
    const task = new Promise((resolve,reject)=>{
        const objetos = 
        {   
            stock: 15,
            cant: 1,
            id: 'item3',
            title: 'Picada',
            price: 800,
            pictureUrl: "/static/media/Picada.948f5c12.jpeg",
            category: "Picada",
            description: "Picada completa para compartir"
        }
        
        setTimeout(()=>{
        resolve(objetos)
        },2000)
    })

    task.then((res)=>{
    setItems(res)

    },(rej)=>{
      console.error("Ocurrio un error")
    })
    },[])


    return <>
       <div className="container-fluid">
            <div className="container-fluid">
                <ItemDetail producto={items}/>
            </div>
         </div>
        
    
    </>;
   
   }
   export default ItemDetailContainer;
   
   