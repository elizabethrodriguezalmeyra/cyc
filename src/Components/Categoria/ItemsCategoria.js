import {getFirestore} from '../../firebase'
import React, {useState, useEffect } from "react";
import ItemList from "../Item/ItemList";

export default function ItemsCategoria ( id) {


const [ items, setItems ] = useState([]); 
const [ loading, setLoading ] = useState(true);   



useEffect(()=>{  
           
            const db= getFirestore();  
            const itemCollection = db.collection('items');
            const itemCategoria = itemCollection.where('categoryId', '==', id.id)
        
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
                setItems(resultados);
                setLoading(true);
            }
            }).catch((error)=>{
                console.log("Error searching items", error);
            })
    

        },[]);

        return <>
        <div className="container-fluid">
           {loading ?
            <ItemList productos={items} /> : <h1> No hay items en esta categoria, vuelva mas tarde</h1> }
           
           
        </div>

        </>
}