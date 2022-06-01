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
        
        <div className="card1">
          <div className="card1T">
            state of the art machinery            
          </div>
          <div>
            <img src={Factory} alt="factory" id="card1Img"></img>
          </div>
          </div>

        <div className="factory">
          <div>
            <img src={Factory} alt="factory" id="front"></img>
          </div>
          <div>
            Professional Team           
          </div>
        </div>
      </div>
      <div>

        <h1>Contact Us</h1>
        <div className="contactContainer">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-diamond-fill" viewBox="0 0 16 16">
          <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/>
          </svg>DT744, Lo O Hamlet, An Tay Ward, Ben Cat Town, Binh Duong Province, Vietnam</span>
          <span>84-274-3580280</span>
          <span>84-274-3580282</span>
        </div>
      </div>
    </body>
  )
}