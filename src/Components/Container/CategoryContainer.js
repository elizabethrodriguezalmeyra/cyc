import React, {useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import '../Item/Item.css';
import {useParams} from 'react-router-dom';
import imagen1 from '../../Fotos/Desayuno.jpeg';
import imagen2 from '../../Fotos/Torta.jpeg';
import imagen3 from '../../Fotos/Picada.jpeg';
import {getFirestore} from '../../firebase'


export default function CategoryContainer () {

    const [ items, setItems ] = useState([]); 
    const [ loading, setLoading ] = useState(true);   
    
    const {id} = useParams();
    //console.log(id)

        useEffect(()=>{
            const db= getFirestore();
            const itemCollection = db.collection('items');
            const itemCategoria = itemCollection.where('categoryId', '==', id)

            itemCategoria.get().then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    setLoading(false);
                   return console.log('No existen items para esa categoria');
                }
                else{
                const resultados = querySnapshot.docs.map(doc =>{
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                console.log(resultados);
                setItems(resultados);
                setLoading(true);
            }
            }).catch((error)=>{
                console.log("Error searching items", error);
            })
    

        },[]);


        
  
    return <>
        
        <div className="container-fluid">
            
           {loading ?  <ItemList productos={items} /> : <h1> No hay items en esta categoria, vuelva mas tarde</h1> }
           
           
        </div>
    </>;
   
   }
      