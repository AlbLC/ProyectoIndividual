
import React, { useState } from "react";
import './Login.css';

function Login() {

  const [emailLog,setEmailLog] = useState("");
  const [contrasenaLog,setContrasenaLog] = useState("");

  const enviar = () => {
     
    console.log(emailLog);
    console.log(contrasenaLog);
     
    const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailLog, 
            contrasena: contrasenaLog
           }) 

        };
        fetch("login", requestOptions)
        .then((response) => response.json())
        
    };
  return <div>

    Email:
    <input type="text" className="email" placeholder="Email" onChange={(e) => setEmailLog(e.target.value)} />
    <br></br>
    Contraseña:
    <input type="password" className="contrasena" placeholder="Contraseña" onChange={(e) => setContrasenaLog(e.target.value)} />

    <input type="submit" className="send" value="Log" onClick={enviar}/>

  </div>;
}

export default Login;