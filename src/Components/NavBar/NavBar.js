import React, { Component, useState } from "react";
import CartWidget from '../CartWidget';

function NavBar() {
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Coffee & Cheese</a>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                <a class="nav-link" href="#">Tortas</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="#">Desayunos</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="#">Picadas</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="#">Sorpresas</a>
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
   
   