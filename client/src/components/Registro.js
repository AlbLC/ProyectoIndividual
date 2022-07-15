import React, { useState } from "react";
import './Global.css';
import { Form, Button,Nav,Navbar,Container } from "react-bootstrap";




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
      // .then((res) => {
      //   windows.location.assign("/")})
      


  };

  return (
    <div>

<Navbar bg="dark" variant="blue">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/"  variant="info">Home</Nav.Link>{' '}
                        {/* <Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '} */}
                        <Nav.Link href="/Login" variant="secondary">Login</Nav.Link>{' '}
                    </Nav>
                </Container>
            </Navbar>


    <div class="Reg">
     
      
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

        
        <Button  variant="dark" type="button" onClick={enviar} >
          Registrarse
        </Button>
      </Form>
      
      
      


    </div>
    </div>
  );
}

export default Registro;