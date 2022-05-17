import React from "react";
import './Main.css'
import Factory from "../../images/Factory.jpg"


export default function Main () {

  const toggleOpaque = () => {
    
  }

  return(
    <body className="mainContainer">
      <div className="HomeFactory">
        <img src={Factory} alt="factory" id="front"></img>
        <div className="slogan">Make Life Comfortable</div>
      </div>
      <div>
        <h1>About Us</h1>
      </div>
    </body>
  )
}