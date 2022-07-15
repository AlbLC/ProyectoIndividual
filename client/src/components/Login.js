
import React, { useState,Link } from "react";
import PUsuarioLogueado from "../pages/PUsuarioLogueado";
import { Form, Button,Nav,Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Login() {
const navigate = useNavigate();
  const [emailLog,setEmailLog] = useState("");
  const [contrasenaLog,setContrasenaLog] = useState("");
  const [loginOk,setLoginOk] = useState(false);

  const enviar = () => {
     
    
     
    const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailLog, 
            contrasena: contrasenaLog
           }) 

        };
        fetch("login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          
          
          localStorage.setItem("user", emailLog);
          

          
            setLoginOk(data.status);
          
        
        });

       
      

      }     
    return (
      <div className="">
        

        <Navbar bg="dark" variant="blue">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/"  variant="info">Home</Nav.Link>{' '}
                        {/* <Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '} */}
                        <Nav.Link href="/Login" variant="secondary">Login</Nav.Link>{' '}
                    </Nav>
                </Container>
            </Navbar>
    
    <div className="Reg">


<Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Pon tu email" onChange={(e) => setEmailLog(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Pon tu contraseña" onChange={(e) => setContrasenaLog(e.target.value)} />
        </Form.Group>
        <Button variant="dark" type="button" onClick={(enviar)} >
          Login
        </Button>

        </Form>


        
   
</div>
<br/>
{loginOk ? navigate("/PUsuarioLogueado") : ""}
  </div>)

}
export default Login;