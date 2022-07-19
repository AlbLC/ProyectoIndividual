import React, { useEffect, useState } from "react";


import { Form, Button,Nav,Navbar,Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";





function Registro() {
const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [registro1, setRegistro1] = useState("");
  
  useEffect(() => {
    if (registro1 != ""&&registro1!="El usuario existe") {
      navigate('/login')
    }
   }, [registro1]);





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
     
      .then((response) => {

        setRegistro1(response.message)
       

      });
      
      
      
      

  };

  return (
    <div>

<Navbar bg="dark" variant="blue">
                <Container>
                    <Nav className="me-auto" id="nav">
                    <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/"  variant="info">Home</Nav.Link>{' '}</Button>
                        {/* <Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '} */}
                        <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/Login" variant="secondary">Login</Nav.Link>{' '}</Button>
                    </Nav>
                </Container>
            </Navbar>


    <div class="Reg">
     
    <div id="solicita">
      <Form>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Pon tu nombre" onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Pon tu apellido" onChange={(e) => setApellido(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Pon tu email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Pon tu contraseña" onChange={(e) => setContrasena(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="Pon tu telefono" onChange={(e) => setTelefono(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Dni</Form.Label>
          <Form.Control type="text" placeholder="Pon tu Dni" onChange={(e) => setDni(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" placeholder="Pon tu direccion" onChange={(e) => setDireccion(e.target.value)} />
        </Form.Group>

        <p>{ registro1!="El usuario existe" ?"":"El username ya existe"}</p>
        <Button  variant="dark" type="button" onClick={enviar} >
          Registrarse
        </Button>
      </Form>
      
      
      
</div>

    </div>
    
    </div>
  );
}

export default Registro;