
import React, { Component } from "react";
import { BrowserRouter ,Link } from "react-router-dom";
import MainComponent from "./components/Main";
import "./App.css"
class App extends Component {


render() {
    return (
        <BrowserRouter>
            <div className="App">
                <a href="http://localhost:3000/">Home</a>
                <br/>
                <Link to={"/Registro"}>Registro</Link>
                <br/>
                <Link to={"/Login"}>Login</Link>
                
                <MainComponent />
            </div>
        </BrowserRouter>
    );
}
}
export default App;


