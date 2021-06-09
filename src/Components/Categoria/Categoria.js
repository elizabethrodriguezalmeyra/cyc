import React, { Component, useState } from "react";
import { useParams } from "react-router";


function Categoria (props) {
    const {idx}=useParams;
    const params = [props.pais];
    return <>
        <div>
            <h3> {idx}{params}producto</h3>
           
      </div>
    </>;
   
   }
   export default Categoria;