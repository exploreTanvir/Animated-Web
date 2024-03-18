import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {
    Route,
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';


const App = () => {
    return (
       <Router>
        <Switch>
            
            <Route path='/'>
                <Home/>
            </Route>
            <Route path='/about'>
                <About/>
            </Route>
            <Route path='/services'>
                <Services/>
            </Route>
            <Route path='/contact'>
                <Contact/>
            </Route>
         <Navbar/>
         </Switch>
       </Router>
    );
};

export default App;
