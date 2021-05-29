import React, { Component, useState, useEffect} from "react";
import CartWidget from '../Cart/CartWidget'
import {Link} from 'react-router-dom';
import {getFirestore} from '../../firebase';


export default function NavBar() {
   
    const [ categorias, setCategorias] = useState([]); 
    const [ loading, setLoading ] = useState(true);   

 useEffect(()=>{
        const db= getFirestore();

        const categoriasCollection = db.collection('categorias');
        categoriasCollection.get()
        .then((querySnapshot) => {
            const resultados = querySnapshot.docs.map(doc =>{
                return {
                    id: doc.id,
                    ...doc.data()

                }
            })
            setCategorias(resultados);
        }).catch((error)=>{
            console.log("Error searching items", error);
       // }).finally(()=> {
         //   setLoading(false);
     });


    },[]);


   
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link to={'/Home'}className="navbar-brand" href="#">Coffee & Cheese</Link>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                { categorias.map((cat) =>
                 <li key={cat.key} className="nav-item">
                    <Link to={`/Categoria/${cat.id}`} className= "nav-link">{cat.nombre} </Link>
                 </li>
                 )
                }

               
            </ul>
            <ul ul class="navbar-nav ml-auto" >
            <li className="nav-item"  >
                <CartWidget icono="Carrito" nombre="Carrito"/>
            </li>
            </ul> 
     
    </div>
    </div>
    </nav>
    </>
   }
 
   
   