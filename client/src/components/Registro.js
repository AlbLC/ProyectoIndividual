import React, { useState } from "react";
import './Registro.css';
import { Form, Button } from "react-bootstrap";




function Registro() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  // const [info, setInfo] = useState("");


  const enviar = () => {


    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        email: email,
        contrasena: contrasena,
        telefono: telefono,
        dni: dni,
        direccion: direccion
      })
    };
    fetch("registro", requestOptions)
      .then((response) => response.json())

  };

  return (
   
    <div className="Reg">
      
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Pon tu nombre" onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Pon tu apellido" onChange={(e) => setApellido(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Pon tu email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Pon tu contraseña" onChange={(e) => setContrasena(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="Pon tu telefono" onChange={(e) => setTelefono(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dni</Form.Label>
          <Form.Control type="text" placeholder="Pon tu Dni" onChange={(e) => setDni(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" placeholder="Pon tu direccion" onChange={(e) => setDireccion(e.target.value)} />
        </Form.Group>

        
        <Button variant="primary" type="button" onClick={enviar} >
          Registrarse
        </Button>
      </Form>


    </div>
  );
}

export default Registro;