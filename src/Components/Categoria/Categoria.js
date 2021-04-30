import React, { Component, useState } from "react";
import { useParams } from "react-router";


function Categoria (props) {
    const {idx}=useParams;
    console.log(idx);
    const params = [props.pais];
    console.log(params);
    return <>
        <div>
            <h3> {idx}{params}producto</h3>
           
      </div>
    </>;
   
   }
   export default Categoria;