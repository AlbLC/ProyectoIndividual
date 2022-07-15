import React, { } from "react";
import { Form, Button,Nav,Navbar,Container,Carousel } from "react-bootstrap";


function Home () {
    
    

  
return(

<div>
<Navbar bg="dark" variant="blue">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/"  variant="info">Home</Nav.Link>{' '}
                        <Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '}
                        <Nav.Link href="/Login" variant="secondary">Login</Nav.Link>{' '}
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="100px"
      src=""
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="100px"
      src=""
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="100px"
      src=""
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>

</div>
)
}
  
export default Home;