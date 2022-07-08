import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Cuenta () {
    
    const [user, setUser] = useState("");
    useEffect(() => {
        
       const usuario = localStorage.getItem("user");
        
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: usuario})
            
      };

      fetch("cuenta", requestOptions)
      .then((response) => response.json())
      .then((response) => setUser(response));

    

 
 }, []);

// console.log(message);



  
return(

<div>

    <h1>Tu cuenta</h1>
    <h5>Tus datos personales</h5>
    {user ? user.map((msj,i) => <div>
      {msj.nombre}
      <br/>
      <br/>
      {msj.apellido}
      <br/>
      <br/>
      {msj.dni}
      <br/>
      <br/>
      {msj.email}
      <br/>
      <br/>
      {msj.telefono}
      <br/>
      <br/>
      {msj.direccion}
      
      </div>) : "no hay datos"}
      <br/>
    <button className="buttonHome"><Link to={"/PUsuarioLogueado"} className="buttonHome" >Volver</Link></button>
    
</div>
)
}
  
export default Cuenta;
