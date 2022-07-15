import React , {Component} from "react"
import { Link } from "react-router-dom";
import { Form, Button,Nav,Navbar,Container,Card } from "react-bootstrap"; 
import '../components/Global.css';




class PUsuarioLogueado extends Component{
     
    
    render() {
        return (
            
           
<div className="" >
<Navbar bg="dark" variant="blue">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/"  variant="info">Home</Nav.Link>{' '}
                        {/* <Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '} */}
                        <Nav.Link href="/Login" variant="secondary">Login</Nav.Link>{' '}
                        <Nav.Link href="/LogOut" variant="secondary">Logout</Nav.Link>{' '}
                    </Nav>
                </Container>
            </Navbar>
  
<div id="cards">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark" size="lg"className="buttonHome"><Link to={"/PRepuestos"} className="buttonHome" >Repuestos</Link>
    </Button>
  </Card.Body>
</Card>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark" size="lg"className="buttonHome"><Link to={"/PReparacion"} className="buttonHome" >Solcitar Reparacion</Link>
    </Button>
  </Card.Body>
  </Card>
  </div>
<br/>
<br/>
<div id="button">
<Button variant="dark" size="sm" className="buttonHome"><Link to={"/PCuenta"} className="buttonHome" >Cuenta</Link>
  </Button>
  </div>
</div>


            
           
         
            );
    }
}
export default PUsuarioLogueado;