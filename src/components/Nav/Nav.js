import React from "react";
import Button from '@mui/material/Button'
import logo from "../../images/Logo2.png";
import "./Nav.css"

function Nav () {
return (
  <main className="nav">
    <img src={logo} alt="logo"></img>
    <Button>About</Button>
    <button>Catalogue</button>
  </main>
)
};

export default Nav;