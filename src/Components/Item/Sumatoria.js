import React, { Componet, useState } from "react";
const Sumatoria = () => {
  const [numero, setNumero] = useState(0);
  const aumentoItem = () => {
    setNumero(numero + 1);
  };
  const restaItem = () => {
    setNumero(numero + 1);
  };
  return (
    <>
      <button onClick={aumentoItem}>+</button>
      <div>
        Hay <b>{numero}</b> 
      </div>
      <button onClick={restaItem}>-</button>
    
    </>
  );
};
export default Sumatoria;

///corchete vacio desp de montar componented