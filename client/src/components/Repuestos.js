import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";


function Repuestos () {
    const [message, setMessage] = useState("");
    

  useEffect(() => {
    fetch("tienda")
      .then((res) => res.json())
      .then((res) => setMessage(res));
  }, []);

console.log(message);
return(

<div>
    {message ? message.map((msj,i) => <div>
      {msj.marca},{msj.modelo},{msj.tipoRepuesto},{msj.precio}
      </div>) : "no hay datos"}  
      <button className="buttonHome"><Link to={"/PUsuarioLogueado"} className="buttonHome" >Volver</Link></button>  
</div>
)
}
  
export default Repuestos;

