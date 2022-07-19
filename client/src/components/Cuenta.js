import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import  { Card,Button } from "react-bootstrap";

function Cuenta () {
    
    const [user, setUser] = useState("");
    useEffect(() => {
        
       const usuario = localStorage.getItem("user");
        
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: usuario})
            
      };
console.log(requestOptions)
      fetch("cuenta", requestOptions)
      .then((response) => response.json())
      .then((response) => {console.log(response);setUser(response.usuario)});

    

 
 }, []);

// console.log(message);



  
return(

<div >



<div id="letras">
    <h1>Tus datos personales</h1>
    </div>
    <div id="solicita">
      <Card style={{ width: '18rem' }} >
              

              <Card.Body>
                <Card.Text>Nombre: {user.nombre}</Card.Text>
                <Card.Text>Apellido: {user.apellido}</Card.Text>
                <Card.Text>Telefono: {user.dni}</Card.Text>
                <Card.Text>Email: {user.email} </Card.Text>
                <Card.Text>Dni: {user.telefono} </Card.Text>
                <Card.Text>Direccion: {user.direccion} </Card.Text>
                
              </Card.Body>
            </Card>
            </div>
      <br/>
      <br/>
      <br/>
      
     
              

            
    <Button variant="light" className="buttonHome"><Link to={"/PUsuarioLogueado"} className="buttonHome" >Volver</Link></Button>
    
</div>
)
}
  
export default Cuenta;
