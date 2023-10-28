import React from "react";
//import image from "../images/photo.jpg";
import univ from "../images/3.png";
import ten from "../images/2.png";
import twe from "../images/1.png";



function Education(){
    return(<>
    <div id="education">
        <h1>Education Background</h1>
        <div className="edu1">
            
            <div className="c10" > <a href=""> <img src={ten} /> </a></div>
            <div className="c12" >   <a href=""> <img src={twe}/> </a> </div>
            <div className="btech" > <a href="">   <img src={univ}/> </a> </div>

        </div>
        
    </div>
    </>)
}

export default Education;