import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button,Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



function Carrito(props) {


  console.log(props);
function confirmarCarrito() {
  props.setMostrarCarrito(false);
  props.setMostrarProductos(false);
  props.setMostrarResumen(true);

}
  return (

    <div >
      <div id="letras4">
<h1>Carrito</h1>
</div>
<div id="Resumen" >
{props.datos ? props.datos.map((rep,i) => {

return(
  
  
    <div >
    <Card style={{ width: '08rem' }} key={i}>
              

    <Card.Body>
      {/* <Card.Title>{rep.marca}</Card.Title> */}
      <Card.Text>{rep.modelo}</Card.Text>
      <Card.Text>{rep.tipoRepuesto}</Card.Text>
      <Card.Text>{rep.precio} </Card.Text>
     
      
      

    </Card.Body>
  </Card>
  </div>
  
)



}): "no hay datos"}
</div>
<Button className="buttonHome" variant="dark" size="lg" onClick={confirmarCarrito}>Confirmar</Button>
    </div>
    
  )
}

export default Carrito;