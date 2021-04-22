import React, {useState, useEffect } from "react";
import ItemList from "../Item/ItemList";


  function ItemListContainer ({greeting, color}) {
    const [ items, setItems ] = useState([])

        useEffect(()=>{
        const task = new Promise((resolve,reject)=>{
            const objetos = [
            {
                id: 'item1',
                title: 'Torta',
                price: '$50',
                pictureUrl: "/static/media/Torta.701fcac0.jpeg",
                description: "Torta decorada con rosas, rellena con dulce de leche, chocolate, merengues"
            },
            {
                id: 'item2',
                title: 'Desayuno',
                price: '$500',
                pictureUrl: "/static/media/Desayuno.c6152fbb.jpeg",
                description: "Desayuno con  cafe, medialunas, mermelada, etc"
            },
            {
                id: 'item2',
                title: 'Desayuno',
                price: '$500',
                pictureUrl: "/static/media/Desayuno.c6152fbb.jpeg",
                description: "Desayuno con  cafe, medialunas, mermelada, etc"
            },
            {
                id: 'item2',
                title: 'Desayuno',
                price: '$500',
                pictureUrl: "/static/media/Desayuno.c6152fbb.jpeg",
                description: "Desayuno con  cafe, medialunas, mermelada, etc"
            },
            {
                id: 'item1',
                title: 'Torta',
                price: '$50',
                pictureUrl: "/static/media/Torta.701fcac0.jpeg",
                description: "Torta decorada con rosas, rellena con dulce de leche, chocolate, merengues"
            },
            {
                id: 'item1',
                title: 'Torta',
                price: '$50',
                pictureUrl: "/static/media/Torta.701fcac0.jpeg",
                description: "Torta decorada con rosas, rellena con dulce de leche, chocolate, merengues"
            }
            ]
            setTimeout(()=>{
            resolve(objetos)
            },2000)
        })
    
        task.then((res)=>{
        setItems(res)
    
        },(rej)=>{
          console.error("Ocurrio un error")
        })/*
        .then((newres)=>{
        //console.log("segundo then")
        })
        .catch((err)=>{
        //console.log("Hubo un error")
        })
        .finally(()=>{
        //console.log("AL FIN TERMINE")
        })*/
        },[])
    
   
    return <>
        <div className="container-fluid">
            <h3 className={color}></h3>
            <ItemList productos={items} />
        </div>
    </>;
   
   }
   export default ItemListContainer;
   