    import React, { Component } from "react";
    import { Routes, Route } from "react-router-dom";
    
    import PRegistro from "../pages/PRegistro";
    import PLogin from "../pages/PLogin";
    import PUsuarioLogueado from "../pages/PUsuarioLogueado";
    import PRepuestos from "../pages/PRepuestos";
    import PReparacion from "../pages/PReparacion";
    import PCuenta from "../pages/PCuenta";
    import PHome from "../pages/PHome";
    import PLogout from "../pages/PLogout";
    import PCarrito from "../pages/PCarrito";

    class Main extends Component {
        

        render() {
            return (
            <div>
               
                <Routes>
                    <Route path="/" element={<PHome/>} />
                    <Route path="/PCuenta" element={<PCuenta/>} />
                    <Route path="/PReparacion" element={<PReparacion />} />
                    <Route path="/PRepuestos" element={<PRepuestos />} />
                    <Route path="/PUsuarioLogueado" element={<PUsuarioLogueado />} />                    
                    <Route path="/Registro" element={<PRegistro />} />
                    <Route path="/Login" element={<PLogin />} />
                    <Route path="/Logout" element={<PLogout />} />
                    <Route path="/PCarrito" element={<PCarrito />} />
                </Routes>
            </div>
            );
        }
    }
    export default Main;