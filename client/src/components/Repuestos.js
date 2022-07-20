import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import  { Card,Button,Form,Nav,Navbar,Container } from "react-bootstrap";

import Carrito from "./Carrito";
import ResumenPedido from "./ResumenPedido";
import Compra from "./Compra";


function Repuestos () {
    const [message, setMessage] = useState("");
    const [checkeado,setCheckeado] = useState(false);
    const [rep,setRep] = useState([]);
    const [mostrarProductos,setMostrarProductos] = useState(true);
    const [mostrarCarrito,setMostrarCarrito] = useState(false);
    const [mostrarResumen,setMostrarResumen] = useState(false);
    const [mostrarCompra,setMostrarCompra] = useState(false);
    
   

  useEffect(() => {
    

    fetch("tienda")
      .then((res) => res.json())
      .then((res) => setMessage(res));
     
  }, []);
  
  const check = (e,data) => {
    setRep([...rep, {checked:e.target.checked,
      id:data.id,marca:data.marca,modelo:data.modelo,tipoRepuesto:data.tipoRepuesto,precio:data.precio}]);

      setMostrarCarrito(true);
  //   setCheckeado(
  //   {...checkeado,checked:e.target.checked,
  //   id:i}
  // )

    
  }
  
  console.log(rep);
  
return(



<div>
  
<Navbar bg="dark" variant="blue">
                <Container>
                    <Nav className="me-auto" id="nav">
                    <Button variant="dark" size="lg" className="buttonHome" ><Nav.Link href="/"  variant="info">Home</Nav.Link>{' '}</Button>
                        {/* <Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '} */}
                        <Button variant="dark" size="lg" className="buttonHome"><Nav.Link href="/Login" variant="secondary">Login</Nav.Link>{' '}</Button>
                        {/* <Nav.Link href="/Logout" variant="secondary">Logout</Nav.Link>{''} */}
                        <Button variant="dark" size="lg" className="buttonHome"  onClick={() => localStorage.removeItem("user")}><Link to={"/"} className="buttonHome">Logout</Link></Button>
                    </Nav>
                </Container>
            </Navbar>
            {mostrarCarrito ? <Carrito datos={rep} setMostrarCarrito={setMostrarCarrito} setMostrarProductos={setMostrarProductos} setMostrarResumen={setMostrarResumen} setMostrarCompra={setMostrarCompra}/> : ""}
            
            {mostrarResumen ? <ResumenPedido datos={rep} setMostrarCarrito={setMostrarCarrito} setMostrarProductos={setMostrarProductos} setMostrarResumen={setMostrarResumen} setMostrarCompra={setMostrarCompra}/> : ""}
            

            {mostrarCompra ? <Compra></Compra>:""}

            {mostrarProductos ? 
  <div id="Repuestos">
{message ? message.map((rep,i) => <div id="card2">
      <Card style={{ width: '18rem' }} key={i}>
              

              <Card.Body>
                <Card.Title>{rep.marca}</Card.Title>
                <Card.Text>{rep.modelo}</Card.Text>
                <Card.Text>{rep.tipoRepuesto}</Card.Text>
                <Card.Text>{rep.precio} </Card.Text>
               
                <>
                <Form.Check aria-label="option 1" name={i} value="1"  id={i} onChange={(e) => check (e,rep)}/>
                </>
                

              </Card.Body>
            </Card>
            <br/>
     
            
      
      </div>) : "no hay datos"} 

      
      
      
<div > 
{/* <Button className="buttonHome" variant="dark" size="lg"><Link to={"/PCarrito"} className="buttonHome" >Añadir</Link></Button> */}
<br/>
      <br/>
      
<div > 
      <Button className="buttonHome" variant="dark" ><Link to={"/PUsuarioLogueado"} className="buttonHome" >Volver</Link></Button>
      </div>
      </div>
      

</div> : ""}

</div>
)
}
  
export default Repuestos;

