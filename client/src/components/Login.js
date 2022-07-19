
import React, { useState,Link } from "react";
import PUsuarioLogueado from "../pages/PUsuarioLogueado";
import { Form, Button,Nav,Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Login = (props) => {

  const [emailLog,setEmailLog] = useState("");
  const [contrasenaLog,setContrasenaLog] = useState("");
  const [loginOk,setLoginOk] = useState(false);
  const navigate = useNavigate();


  const enviar = () => {
     
    
     
    const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            email: emailLog, 
            contrasena: contrasenaLog
           }) 

        };
        
        fetch("login", requestOptions)
        .then((response) => response.json())
        .then((response) => {
          setLoginOk(response.message)
          if(response.message===true){
            
            localStorage.setItem('user', 
              response.loginEmail
               

            );

            navigate('/PUsuarioLogueado')
          }else{
            setLoginOk(response.message)
          }
          });

       
      

      }     
    return (
      <div className="">
        

        <Navbar bg="dark" variant="blue" >
                <Container>
                    <Nav className="me-auto" id="nav" >
                    <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/"  variant="info">Home</Nav.Link>{' '}</Button>
                    <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '}</Button>
                        {/* <Nav.Link href="/Login" variant="secondary">Login</Nav.Link>{' '} */}
                    </Nav>
                </Container>
            </Navbar>
    
    <div className="Reg">
<div id="solicita">

<Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Pon tu email" onChange={(e) => setEmailLog(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Pon tu contraseña" onChange={(e) => setContrasenaLog(e.target.value)} />
        </Form.Group>
        <Button variant="dark" size="lg" type="button" onClick={() => enviar()} >
          Login
        </Button>

        </Form>


        
        </div>
</div>
<br/>
<p> {loginOk != true ? "" : ""}</p>
  </div>)

}
export default Login;