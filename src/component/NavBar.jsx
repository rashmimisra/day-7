import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        
      {/* <Link to="/">Home</Link> 
      <NavLink to="/MyCard2">mycard</NavLink> */}
      <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="/">KIET mca</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="navbar-brand" aria-current="page" to="/" 
        
        style={({isActive})=>
        isActive ?{color:"red"} :{color:"white"}
        
        
        
        }>
          home</NavLink>
          </li>
        <li className="nav-item">
       
          <NavLink className="nav-link " aria-current="page" to="/Mycard2"
           style={({isActive})=>
           isActive ?{color:"red"} :{color:"white"}
           
           
           
           }>Mycard</NavLink>
        </li>
         
        <li className="nav-item">
       
          <NavLink className="nav-link " aria-current="page" to="/student"
           style={({isActive})=>
           isActive ?{color:"red"} :{color:"white"}
           
           
           
           }>Student</NavLink>
        </li>
         
        <li className="nav-item">
       
          <NavLink className="nav-link " aria-current="page" to="/product"
           style={({isActive})=>
           isActive ?{color:"red"} :{color:"white"}
           
           
           
           }>Product </NavLink>
        </li>
        <li className="nav-item">
       
          <NavLink className="nav-link " aria-current="page" to="/about"
           style={({isActive})=>
           isActive ?{color:"red"} :{color:"white"}
           
           
           
           }>About us </NavLink>
        </li>
        
        
        <li className="nav-item">
          <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      


    </div>
  )
}

export default NavBar