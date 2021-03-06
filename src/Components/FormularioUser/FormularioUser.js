import React, { Component, useState, useContext, useEffect } from "react";
import {cartContext } from "../Context/cartContext";
import './style.css';
import {NavLink} from 'react-router-dom';
import Orden from "../Orden/Orden";
  



export default  function FormularioUser () { 
    const {carrito, precioTotal, cantItem} = useContext(cartContext);
    const [crear, setCrear] = useState(false)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    let email2= true
    

  function onNameChange(evt) {
    setName(evt.target.value);
  }
  function onPhoneChange(evt) {
    setPhone(evt.target.value);
  }
  function onEmailChange(evt) {
    setEmail( evt.target.value);
  }
  function onEmail2Change(evt){
   if(email != evt.target.value){
    
    document.getElementById("error").classList.add("mostrar");
    document.getElementById("ok").classList.remove("mostrar");
   
    email2= false
  }
  else {
    document.getElementById("error").classList.remove("mostrar");
    document.getElementById("ok").classList.add("ocultar");
    email2=true
  }
}
  function CrearOrden(){
    if(name !== "" && phone !== "" && email !== "" && email2){
      setCrear(true)   
      }
  

  }

  return <>   
 
 <table class="table">
          <thead>
            <tr>
                          
                  <th align="center">Cantidad</th>
                  <th align="center">Titulo</th>
                  <th align="center">Precio</th>
            </tr>    
      </thead>
      <tbody>
        
        {carrito.map((row) => 
        <tr class="table-active">
                    <td align="center"> {row.cant} </td>
                    <td align="center"> {row.title} </td>
                    <td align="center"> {row.price} </td>
                  
                    </tr>   
                )}
        
        <tr>
          <th scope="row"></th>
          <td colspan="2" class="table-active">Total: {precioTotal()}</td> 
          <td></td>
        </tr>
       </tbody>

       </table>

<fieldset>
<legend align="center">Datos personales</legend>
<div id="msg"></div>
 

<div id="error" class="alert alert-danger ocultar" role="alert">
    Los Mails no coinciden, vuelve a intentar !
</div>
<div id="ok" class="alert alert-success ocultar" role="alert">
    Los Mails coinciden !
</div>


<div class="form-group row" align="center">

<label for="inputname" class="col-sm-2 col-form-label">Nombre y Apellido</label>
<div class="col-sm-6">
  <input type="text" class="form-control" onChange={evt => onNameChange(evt)} placeholder="NombreyApellido" required></input>
</div>
</div>

<div class="form-group row" align="center">
<label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
<div class="col-sm-6">
  <input type="email" class="form-control" id="inputemail" onChange={evt => onEmailChange(evt)} placeholder="Email" required></input>
</div>
</div>
<div class="form-group row" align="center">
<label for="inputEmail" class="col-sm-2 col-form-label">RepetirMail</label>
<div class="col-sm-6">
  <input type="email" class="form-control" id="email" onChange={evt => onEmail2Change(evt)} placeholder="Repetir Email" required></input>
</div>
</div>
<div class="form-group row" align="center">
<label for="inputtelefono" class="col-sm-2 col-form-label">Telefono</label>
<div class="col-sm-6">
  <input type="number" class="form-control" onChange={evt => onPhoneChange(evt)} placeholder="Telefono" required></input>
</div>
</div>


</fieldset>
 
<button onClick={()=>CrearOrden()}> Crear Orden  </button>

{crear?  <Orden nombre={name} telefono={phone} email={email}/> : <h1>Deber?? ingresar todos los datos para crear la orden</h1>}
   
         </>

}
