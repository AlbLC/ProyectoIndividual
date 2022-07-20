import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Tarjeta from "./Tarjeta";


function ResumenPedido(props) {


 
  function compraRealizada() {
    props.setMostrarCarrito(false);
    props.setMostrarProductos(false);
    props.setMostrarCompra(true)
    props.setMostrarResumen(false);
  
  }

  return (

    <div>
<div id="letras">     
<h1>Resumen pedido</h1>
</div> 
<div id="Resumen" >
{props.datos ? props.datos.map((rep,i) => {

return(
    
    <div id="card2">
    
    
    <Card style={{ width: '18rem' }} key={i}>
              

              <Card.Body>
                <Card.Title>{rep.marca}</Card.Title>
                <Card.Text>{rep.modelo}</Card.Text>
                <Card.Text>{rep.tipoRepuesto}</Card.Text>
                <Card.Text>{rep.precio} </Card.Text>
               
                
                

              </Card.Body>
            </Card>
            <br/>
            </div>
            
            
          
)



}): "no hay datos"}
</div>
<Tarjeta/>
<br/>
<br/>
<Button className="buttonHome" variant="dark" size="lg" onClick={compraRealizada}>Comprar</Button>
    
    </div>
  )
}

export default ResumenPedido;