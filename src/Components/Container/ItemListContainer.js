import React, {useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import '../Item/Item.css';
import {useParams} from 'react-router-dom';
import imagen1 from '../../Fotos/Desayuno.jpeg';
import imagen2 from '../../Fotos/Torta.jpeg';
import imagen3 from '../../Fotos/Picada.jpeg';
import {getFirestore} from '../../firebase'


  function ItemListContainer () {
    const [ items, setItems ] = useState([]); 
    const [ loading, setLoading ] = useState(true);   
   
        useEffect(()=>{

            const db= getFirestore();

            const itemCollection = db.collection('items');
            itemCollection.get().then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log('Items no existe');
                }
                const resultados = querySnapshot.docs.map(doc =>{
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setItems(resultados);
            }).catch((error)=>{
                console.log("Error searching items", error);
            }).finally(()=> {
                setLoading(false);
            });
    

        },[]);


        
  
    return <>
        
        <div className="container-fluid">
           
            <ItemList productos={items} />
           
        </div>
    </>;
   
   }
   export default ItemListContainer;
   