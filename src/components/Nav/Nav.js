import React from "react";
import logo from "../../images/Logo3.png";
import "./Nav.css"

function Nav () {

    return (
      <div className="container">
        <img src={logo} alt="logo"></img>
        <ul>
          <li>About</li>
          <li className="dropdown">
            <button className="dropbtn"> Catalogue </button>
              <div className="dropdown-content"> 
                <a>Bedroom</a>
                <a>Bathroom</a>
                <a>Living Room</a>
              </div>
          </li>
          <li>Cotact Us</li>
        </ul>
      </div>
    );
  }

export default Nav;