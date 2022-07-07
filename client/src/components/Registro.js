import React, { useState } from "react";
import './Registro.css';

function Registro() {

    const [nombre, setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [email,setEmail] = useState("");
    const [contrasena,setContrasena] = useState("");
    const [telefono,setTelefono] = useState("");
    const [dni,setDni] = useState("");
    const [direccion,setDireccion] = useState("");
    // const [info, setInfo] = useState("");

    
    const enviar = () => {
     
        console.log(nombre);
        console.log(apellido);
         const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ nombre: nombre, 
                apellido: apellido, 
                email: email, 
                contrasena: contrasena, 
                telefono: telefono, 
                dni: dni, 
                direccion: direccion }) 
            };
            fetch("registro", requestOptions)
            .then((response) => response.json())
            
        };

  return (
    <div className="Reg">

      
        
            Nombre:
            <input type="text" className="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
            <br></br>
            Apellido:
            <input type="text" className="apellido" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
            <br></br>
            Email:
            <input type="text" className="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <br></br>
            Contraseña:
            <input type="password" className="contrasena" placeholder="Contraseña" onChange={(e) => setContrasena(e.target.value)} />
            <br></br>
            Telefono:
            <input type="text" className="telefono" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} /> 
            <br></br>
            DNI:
            <input type="text" className="dni" placeholder="DNI" onChange={(e) => setDni(e.target.value)} />
            <br></br>
            Direccion:
            <input type="text" className="direccion" placeholder="Direccion" onChange={(e) => setDireccion(e.target.value)} />
            
            <input type="submit" className="send" value="Registrarse" onClick={enviar}/>
            


            
            
 </div>
  );
}

export default Registro;