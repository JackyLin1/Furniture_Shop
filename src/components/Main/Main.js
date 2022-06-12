import React from "react";
import './Main.css'
import Factory from "../../images/Factory.PNG"


export default function Main () {

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
            Professional Team with experience   
          </div>
        </div>
      </div>
      <div>

        <h1>Contact Us</h1>
        <div className="contactContainer">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>DT744, Lo O Hamlet, An Tay Ward, Ben Cat Town, Binh Duong Province, Vietnam</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>84-274-3580280</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>84-274-3580282</span>
        </div>
      </div>
    </body>
  )
}