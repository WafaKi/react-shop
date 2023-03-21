import './styles/App.css';
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
    return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <AppRouter/>
                </div>
            </BrowserRouter>
           
    )
}

export default App;
