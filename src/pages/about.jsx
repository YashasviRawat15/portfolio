import React from "react";
import image from "../images/photo.jpg";

function About(){
    return(<>
    <div id="about">
<div>
        <h1>
            About Yashasvi Rawat
        </h1>
        <p> <img src={image} alt="Photo"/>
        I am a passionate B.Tech student majoring in Computer Science and Engineering at Rajiv Gandhi Institute of Petroleum Technology, hailing from the vibrant city of Jaipur, Rajasthan. With a strong foundation in Full Stack Development, I have a keen interest in creating innovative and user-centric web applications. My dedication to learning and adapting to new technologies allows me to craft efficient and engaging digital solutions. I am committed to turning ideas into reality and am always excited to take on new challenges in the world of web development.</p>
        
        </div>
    </div>
    </>)
}

export default About;