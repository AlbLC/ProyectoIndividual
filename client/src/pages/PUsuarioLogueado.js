import React , {Component} from "react"
import { Link } from "react-router-dom";
import { Form, Button,Nav,Navbar,Container,Card } from "react-bootstrap"; 





class PUsuarioLogueado extends Component{
     
    
    render() {
        return (
            
           
<div className="" >
<Navbar bg="dark" variant="blue">
                <Container>
                    <Nav className="me-auto" id="nav">
                    <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/" size="lg" className="buttonHome"  variant="info">Home</Nav.Link>{' '}</Button>
                        {/* <Nav.Link href="/Registro" variant="secondary">Registro</Nav.Link>{' '} */}
                        <Button size="lg" className="buttonHome" variant="dark"><Nav.Link href="/Login"  variant="secondary">Login</Nav.Link>{' '}</Button>
                        {/* <Nav.Link href="/Logout" variant="secondary">Logout</Nav.Link>{''} */}
                        <Button variant="dark" size="lg"className="buttonHome" onClick={() => localStorage.removeItem("user")}><Link to={"/"} className="buttonHome">Logout</Link></Button>
                    </Nav>
                </Container>
            </Navbar>
  
<div id="cards">
  <div id="card1">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" id="foto" src="http://mac-barcelona.com/wp-content/uploads/2017/01/featured-content-repair-icon-gray_2x-150x150.png" />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
      </Card.Text>
    <Button variant="dark"  size="lg"className="buttonHome"><Link to={"/PRepuestos"} className="buttonHome" >Repuestos</Link>
    </Button>
  </Card.Body>
</Card>
</div>
<div id="card1">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" id="foto" src="http://mac-barcelona.com/wp-content/uploads/2017/01/featured-content-repair-icon-gray_2x-150x150.png" />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
     </Card.Text>
    <Button variant="dark" size="lg"className="buttonHome"><Link to={"/PReparacion"} className="buttonHome" >Solicitar Reparacion</Link>
    </Button>
  </Card.Body>
  </Card>
  </div>
  </div>
<br/>
<br/>
<br/>
<br/>


<div id="solicita">
<div id="button">
<Button variant="dark" size="lg" className="buttonHome"><Link to={"/PCuenta"} className="buttonHome" >Cuenta</Link>
  </Button>
  </div>
</div>
</div>

            
           
         
            );
    }
}
export default PUsuarioLogueado;