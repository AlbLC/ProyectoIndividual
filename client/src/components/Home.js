import React, { } from "react";
import { Form, Button,Nav,Navbar,Container,Carousel } from "react-bootstrap";


function Home () {
    
    

  
return(

<div>
<Navbar bg="dark" variant="blue">
                <Container>
                    <Nav className="me-auto" id="nav">
                    <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/"  variant="info">Home</Nav.Link>{' '}</Button>
                    <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '}</Button>
                    <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/Login" variant="secondary">Login</Nav.Link>{' '}</Button>
                    </Nav>
                </Container>
            </Navbar>
      <div id="home">
        
        
      <img src="../imagenesCarru/repara_iphone_sea_cual_sea.jpeg" alt="logo"/>
        
        
        
        </div>      
                

            
</div>
)
}
  
export default Home;