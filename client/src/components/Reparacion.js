import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {Form, Button, Navbar, Container, Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";




function Reparacion () {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [envio, setEnvio] = useState("");

  


    
  const enviar = () => {


    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        marca: marca,
        modelo: modelo,
        descripcion: descripcion
       
      })
    };
    fetch("reparacion", requestOptions)
      .then((response) => response.json())
      
setEmail("")  
setMarca("")
setModelo("")
setDescripcion("")





       }


  
return(

<div>

<Navbar bg="dark" variant="blue" >
                <Container>
                    <Nav className="me-auto" id="nav" >
                    <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/"  variant="info">Home</Nav.Link>{' '}</Button>
                        {/* <Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '} */}
                        <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/Login" variant="secondary">Login</Nav.Link>{' '}</Button>
                        <Button variant="dark" size="lg" className="buttonHome" onClick={() => localStorage.removeItem("user")}><Link to={"/"} className="buttonHome">Logout</Link></Button>
                    </Nav>
                </Container>
            </Navbar>
  
  <div id="letras2">
    
    <h3>Solicita tu reparación</h3>
    </div>
    <div id="solicita">
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control type="email" value={email} placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label></Form.Label>
        <Form.Control type="text" value={marca} placeholder="Marca" onChange={(e) => setMarca(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label></Form.Label>
        <Form.Control type="text" value={modelo} placeholder="Modelo" onChange={(e) => setModelo(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>*Descripcion*</Form.Label>
        <Form.Control as="textarea" rows={8} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </Form.Group>
      <Button  variant="dark" type="buttonHomme" size="lg" onClick={enviar} >
          Enviar
        </Button>
    </Form>
    </div>
    <br/>
    
    <Button className="buttonHome"  variant="dark" ><Link to={"/PUsuarioLogueado"} className="buttonHome" >Volver</Link></Button>
    
</div>
)
}
  
export default Reparacion;

