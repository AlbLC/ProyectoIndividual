
import React, { Component } from "react";
import { BrowserRouter ,Link } from "react-router-dom";
import MainComponent from "./components/Main";
import "./App.css"

class App extends Component {


render() {
    return (
        
            <div className="App">
                <BrowserRouter>
                <a href="http://localhost:3000/">Home</a>
                <br/>
                <Link to={"/Registro"}>Registro</Link>
                <br/>
                <Link to={"/Login"}>Login</Link>
                <MainComponent />
                
                 </BrowserRouter>
            </div>
       
    );
}
}
export default App;


