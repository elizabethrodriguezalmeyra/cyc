import React from 'react';
import CartWidget from '../Components/CartWidget';

const NavBar = () => {
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Menu</a>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                <a class="nav-link" href="#">Dulces</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="#">Salados</a>
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
   
   