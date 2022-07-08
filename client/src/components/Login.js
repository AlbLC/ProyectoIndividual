
import React, { useState } from "react";
import PUsuarioLogueado from "../pages/PUsuarioLogueado";



function Login() {

  const [emailLog,setEmailLog] = useState("");
  const [contrasenaLog,setContrasenaLog] = useState("");
  const [loginOk,setLoginOk] = useState(false);

  const enviar = () => {
     
    
     
    const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailLog, 
            contrasena: contrasenaLog
           }) 

        };
        fetch("login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          
          
          localStorage.setItem("user", emailLog);
          

          
            setLoginOk(data.status);
          
        
        });

        

      }     
    return <div>

     Email:
    <input type="text" className="email" placeholder="Email" onChange={(e) => setEmailLog(e.target.value)} />
    <br></br>
    Contraseña:
    <input type="password" className="contrasena" placeholder="Contraseña" onChange={(e) => setContrasenaLog(e.target.value)} />

    <input type="submit" className="send" value="Log" onClick={enviar}/>

   {loginOk ? <PUsuarioLogueado /> : ""}

  </div>;

}
export default Login;