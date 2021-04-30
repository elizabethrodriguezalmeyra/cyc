import React, { Component, useState } from "react";
import CartWidget from '../CartWidget';
import {Link, NavLink} from 'react-router-dom';


function NavBar() {
    const arrCat = ['Tortas','Desayunos', 'Picadas', 'Sorpresas'];
   
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link to={'/Home'}className="navbar-brand" href="#">Coffee & Cheese</Link>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                { arrCat.map((cat) =>
                 <li key={cat.toString()} className="nav-item">
                    <Link to={`/Categoria/${cat}`} className= "nav-link">{cat} </Link>
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
    </>;
   }
   export default NavBar;
   
   