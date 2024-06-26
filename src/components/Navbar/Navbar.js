import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../images/LOGO.png"

const Navbar = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-10 mx-auto'>
       <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <img src={logo} class="navbar-brand" alt="Header logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  activeClassName="menu_active" exact aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  activeClassName="menu_active" to="Services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  activeClassName="menu_active" to="About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="menu_active" to="Contact">Contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div></nav></div>
    </div>
  </div>
    </>
  )
}
export default Navbar