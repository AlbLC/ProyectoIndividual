import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Tarjeta from "./Tarjeta";


function Compra(props) {

    

  console.log(props);

  return (
<div>
<br/>
<br/> 
<br/>
<br/>
<div id="compra">     
<h1>Compra realizada con exito!</h1>
 
<h3>Dentro de 24h/48h recibira su pedido en la dirección de correo facilitada en el registro </h3>
</div>
<br/>
<br/>
<div id="compra">  
<h5>Para cualquier duda, pongase en contacto en el correo: SmartDrReparaciones@outlook.com </h5>

</div>
   
    </div>
  )
}

export default Compra;