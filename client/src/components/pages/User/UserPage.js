import React from 'react';
// import { Link } from 'react-router-dom'
import './UserPage.css';
import BotResume from '../BotResume/BotResume.js';
import BotImage from './Susanbot_2.png';

function UserPage() {

  return (
    <div className="LandingPage">
      
<div className="LandingPageHeading">
  <img src={BotImage} className="BotImage" alt="BotLogo" /> 
  {/* <div className="speech-bubble">Text</div> */}
    </div>
    <div className="Separator">

   
    <div style = {{ flexDirection:"row", flex: "1", flexWrap: "wrap", color: "#410074", font: "35px bold Avenir sans-serif"}} className="speech-bubble-user"><br/>Have a fun chat with Robbie the Bot and upload your resume. 
    Recruiters will interview your bot version and get to know you before the real interview! </div>
    
    </div>

     <div className="BotDesign">
                  <BotResume />
       </div>
    </div>
  );
}

export default UserPage;
