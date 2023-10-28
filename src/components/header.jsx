import React, { useState } from "react";

import image from "../images/android-chrome-192x192.png";
function Header(){
    const [state,setState] = useState(false);
    return (
      <>
        
        
          <div id="navBar" className={state ? "#navBar active" : "#navBar"}  >
          <a href="#page"><img src={image} alt="Logo" />  </a>
          <ul> 
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
            
          </ul>
          <div id="mobile" >
          <i id="bars" onClick={()=> setState(state => !state)} className={state ? "change fas fa-times " : "fas fa-bars"} ></i>
        
        </div>
          </div>
        
        
      </>
    )
}

export default Header;