import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import { } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
       <>
       <Navbar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/services' component={Services}/>   
            <Redirect to="/"/>
         </Switch>
         <Footer/>
     </>
    );
};

export default App;
