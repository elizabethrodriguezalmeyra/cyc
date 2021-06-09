import React, {useState, useEffect } from "react";
import '../Item/Item.css';
import {useParams} from 'react-router-dom';
import imagen1 from '../../Fotos/Desayuno.jpeg';
import imagen2 from '../../Fotos/Torta.jpeg';
import imagen3 from '../../Fotos/Picada.jpeg';
import {getFirestore} from '../../firebase'
import ItemsCategoria from '../Categoria/ItemsCategoria'

export default function CategoryContainer () {

    
    const [categoria, setCategoria] = useState();
    
    const {nombre} = useParams();
  

        useEffect(()=>{
            const db= getFirestore();  
           
            const categoriaCollection = db.collection('categorias')
            const categoriaId = categoriaCollection.where('nombre' , '==', nombre)
            categoriaId.get().then((query)=>{
                if(query.size === 0) {
                    return console.log('No existe esa categoria');
                }
                else{
                    return setCategoria(query.docs[0].id);
                }}).catch((error)=>{
                    console.log("Error searching categoria", error);
                })
        }, '')
           
        

 
    return <>
        
        <div className="container-fluid">
            
           {categoria=== undefined ?  <h1> Cargando </h1>  :   <ItemsCategoria id={categoria} />}
           
           
        </div>
    </>;
   
   }
      