import React, { } from "react";
import { Link } from "react-router-dom";

function Cuenta () {
    
    

  
return(

<div>
    <h1>Tu cuenta</h1>
    <h5>Tus datos personales</h5>
    <button className="buttonHome"><Link to={"/PUsuarioLogueado"} className="buttonHome" >Volver</Link></button>
</div>
)
}
  
export default Cuenta;
