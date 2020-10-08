import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import { Container, Row, Col, Navbar, Figure, Nav  } from 'react-bootstrap';
import './RecruiterPage.css';
//import BotResume from '../BotResume/BotResume.js';
import BotImage from './Susanbot_2.png';
import ChatBot from 'react-simple-chatbot';
import Scroll from 'react-scroll';


// import { ThemeProvider } from 'styled-components';



function Recruiter(props) {
  const firstLast = 'Susana\'s';
  const topSkills = 'React, Python, and Javasctipt';
  const contactInfo = '555-555-5555';
//const topSkills = 'React, Python, and Javasctipt';
//const contactInfo = '555-555-5555';
//const [name, setName] = useState(null);
  const [myDetails, setMyDetails] = useState({
  name:null,
  age:"defauage",
  gender: "default gender",
  
  ed1: "default ed1",
  ed2: "default ed2",
  ed3: "default ed3"
});



const [yearsExperience, setYearsExperience] = useState(null); 
const width="100%";
const steps = [
  {
    id: 'greeting',
    component: < YourName />,
    asMessage: true,
    trigger: 'age',

  },
  {
    id: 'age',
    component: <Age />,
    asMessage: true,
    trigger: 'gender',

  },
  {
    id: 'gender',
    component: <Gender />,
    asMessage: true,
    trigger: 'education1',

  },
  {
    id: 'education1',
    component: <Education1 />,
    asMessage: true,
    trigger: 'education2',

  },
  {
    id: 'education2',
    component: <Education2 />,
    asMessage: true,
    trigger: 'education3',

  },
  {
    id: 'education3',
    component: <Education3 />,
    asMessage: true,
    trigger: 'end-message-hired',

  },
  {
    id: 'end-message-hired',
    message: 'Thanks for your time! I look foward to a rewarding career with your company!',
    trigger: 'startover',
  },
  {
    id: 'end-message',
    message: 'Thanks for your time! Hope you have a wonderful life!',
    trigger: 'startover',
  },
  {
    id: 'startover',
    options: [
      {value: 'yes', label: 'Start Over', trigger: 'greeting' },
    ],
  },

];

//const [yearsExperience, setYearsExperience] = useState('5');
const scroll = Scroll.animateScroll;
function Scroller() {
  scroll.scrollTo(0);
}

function Age(props) {
  return (
  <div> I am  {myDetails.age} years old.</div>
  );
}

function Gender(props) {
  return (
  <div>I am {myDetails.gender}</div>
  );
}
function Education1(props) {
  return (
  <div>I am a {myDetails.ed1} holder!</div>
  );
}
function Education2(props) {
  return (
    
  <div>I am in the {myDetails.ed2} field!</div>

  );
}
function Education3(props) {
  return (
  <div>My specialty being {myDetails.ed3}.</div>
  );
}
function getData() {
console.log('Fetching data from API');
fetch('/api/mongodb/usersData/')
.then(response => response.json())
.then(data => {

console.log('Got data back', data);
// setYearsExperience(data);
console.log('Got data back', data);
//setName(data[0].name);
setMyDetails(
  {
      ...myDetails,
      name: data[20].name,
      gender: data[20].gender,
      age: data[20].age,
      
      ed1: data[20].ed1,
      ed2: data[20].ed2,
      ed3: data[20].ed3,
  }
);

});}



useEffect(() => {
  console.log(" log-2 yearsExperience changed to:", yearsExperience)
}, [yearsExperience]);
useEffect(() =>{
  console.log(" log-2 name:", myDetails.name)
}, [myDetails.name]);

useEffect(() => {
  console.log("log the scroll")
  const timer = setTimeout(() => {
    Scroller();
  }, 5000);
  return () => clearTimeout(timer);
});

function YourName(props) {
  return (
    <div>
  
  <div>Hi there, welcome to {myDetails.name} resume chatbot!</div>
  </div>
  );
}
console.log('log-3 outside any function experience: ', yearsExperience)
// console.log('log-3 outside any function experience: ', yearsExperience)

function Experience(props) {
  console.log(' log-4 inside function experience: ', props.yearsExperience)
  // console.log(' log-4 inside function experience: ', props.yearsExperience)
    return (
    <div>I have {props.yearsExperience} years experience as a senior developer for Faceboop!</div>
 );

    };
  

function allDataIsReady(){
  getData();
  console.log("age ", myDetails.ed3)
return myDetails.name //&& yearsExperience
}
//useEffect(getData(),[name]);
return (
<Container fluid >


{/* <Row style = {{height : "600px"}}></Row> */}
  



<Row>
    
<Col md={3}>
{/* <Row style = {{height: "10%"}}></Row> */}
{/* <img src={BotImage} className="BotImage" alt="BotLogo" />  */}
{/* <div className="speech-bubble">Text</div> */}
  <Figure className="d-none d-md-block d-lg-block BotImage" >
  {/* <Figure.Caption>Robbie, the bot</Figure.Caption> */}
  <Figure.Image   src={BotImage} alt="BotLogo"/>
  {/* BotImage d-md-block d-lg-block */}
  
  </Figure>

  

  </Col>
  
  <Col md="5">
    <Navbar expand="lg" >
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-block myNavBar" >
          <Nav.Link className="myNavLinkRecruiter"  href="/recruiter/">Ask Robbie the chatbot what you want to know about 
          a potential candidate. It's just like interviewing them in person!</Nav.Link>
          <br/>

           <Nav.Link  className="myNavLinkCommon" href="/about/">About</Nav.Link>
           <br/>
           
          
           <Nav.Link className="myNavLinkCommon"  href="/user/">User</Nav.Link>
          </Nav>
      </Navbar.Collapse>

    </Navbar>
  </Col>

  

   <Col md={4}>
   
          {allDataIsReady() ? <ChatBot
 width={width}         
headerTitle="My Excellent Resume Chatbot"
// speechSynthesis={{ enable: true, lang: 'en' }}
steps={steps}/>
: null} 
                
     </Col>
  

     </Row>
    

  </Container>

);
}

export default Recruiter;


