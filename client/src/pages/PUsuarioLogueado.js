import React , {Component} from "react"
import { Link } from "react-router-dom";


class PUsuarioLogueado extends Component{
    
    
    render() {
        return (
            
            <div>
                <h1>--- * Pagina Tienda * ---</h1>
                <br/>

<button className="buttonHome"><Link to={"/PRepuestos"} className="buttonHome" >Repuestos</Link></button>
<br/>
<br/>
<button className="buttonHome"><Link to={"/PReparacion"} className="buttonHome" >Solicitar una reparacion</Link></button>
<br/>
<br/>
<button className="buttonHome"><Link to={"/PCuenta"} className="buttonHome" >Tu Cuenta</Link></button>          
            </div>
     
         
            );
    }
}
export default PUsuarioLogueado;