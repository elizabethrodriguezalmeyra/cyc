import React, {useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import '../Item/Item.css';
import {useParams} from 'react-router-dom';
import imagen1 from '../../Fotos/Desayuno.jpeg';
import imagen2 from '../../Fotos/Torta.jpeg';
import imagen3 from '../../Fotos/Picada.jpeg';


  function ItemListContainer () {
    const [ items, setItems ] = useState([]);    
    const {id} = useParams();
        useEffect(()=>{
        const task = new Promise((resolve,reject)=>{
            const objetos = [
            {
                id: 'item1',
                title: 'Torta',
                price: '$50',
                pictureUrl: "/static/media/Torta.701fcac0.jpeg",
                category: "Torta",
                description: "Torta decorada con rosas, rellena con dulce de leche, chocolate, merengues"
            },
            {
                id: 'item2',
                title: 'Desayuno',
                price: '$500',
                pictureUrl: "/static/media/Desayuno.c6152fbb.jpeg",
                category: "Desayuno",
                description: "Desayuno con  cafe, medialunas, mermelada, etc"
            },
            {
                id: 'item3',
                title: 'Picada',
                price: '$800',
                pictureUrl: "/static/media/Picada.948f5c12.jpeg",
                category: "Picadas",
                description: "Picada completa para compartir"
            },
            {
                id: 'item4',
                title: 'Desayuno',
                price: '$500',
                pictureUrl: "/static/media/Desayuno.c6152fbb.jpeg",
                category: "Desayuno",
                description: "Desayuno con  cafe, medialunas, mermelada, etc"
            },
            {
                id: 'item5',
                title: 'Torta',
                price: '$50',
                pictureUrl: "/static/media/Torta.701fcac0.jpeg",
                category: "Torta",
                description: "Torta decorada con rosas, rellena con dulce de leche, chocolate, merengues"
            },
            {
                id: 'item6',
                title: 'Torta',
                price: '$50',
                pictureUrl: "/static/media/Torta.701fcac0.jpeg",
                category: "Torta",
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
        <h5> {id} </h5>
        <div className="container-fluid">
           
            <ItemList productos={items} />
           
        </div>
    </>;
   
   }
   export default ItemListContainer;
   