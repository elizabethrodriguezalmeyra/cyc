import React, { Component, useState } from "react";
import CartWidget from '../CartWidget';
import {Link, Navlink} from 'react-router-dom';


function NavBar() {
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link to={'/Home'}className="navbar-brand" href="#">Coffee & Cheese</Link>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                    <Link to={`/Tortas`} class="nav-link">Tortas </Link>
                </li>
                <li className="nav-item">
                <Link to={'/Desayunos'} class="nav-link">Desayunos</Link>
                </li>
                <li className="nav-item">
                <Link to={'/Picadas'} class="nav-link">Picadas</Link>
                </li>
                <li className="nav-item">
                <Link to={'/Sorpresas'} class="nav-link">Sorpresas</Link>
                </li>
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
   
   