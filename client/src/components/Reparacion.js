import React, { } from "react";
import { Link } from "react-router-dom";


function Reparacion () {
    
    

  
return(

<div>
    <h1>Reparaciones aqui</h1>
    <h5>Solicita tu reparacion, escribenos un mensaje y te contestaremos lo antes posible</h5>
    <button className="buttonHome"><Link to={"/PUsuarioLogueado"} className="buttonHome" >Volver</Link></button>
</div>
)
}
  
export default Reparacion;

