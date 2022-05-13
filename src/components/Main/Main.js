import React from "react";
import './Main.css'
import Factory from "../../images/Factory.jpg"


export default function Main () {
  return(
    <body>
      <div className="HomeFactory">
        <img src={Factory} alt="factory" id="front"></img>
        <div className="slogan">Make Life Comfortable</div>
      </div>
    </body>
  )
}