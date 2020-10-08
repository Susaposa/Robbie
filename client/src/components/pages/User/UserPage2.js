import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
import './UserPage.css';
import BotResume from '../BotResume/BotResume.js';
import { Container, Row, Col, Navbar, Figure, Nav  } from 'react-bootstrap';
import BotImage from './Susanbot_2.png';
import ChatBot from 'react-simple-chatbot';



function User(props) {
  const [firstLast, setfirstLast] = useState('');
  const [topSkills, settopSkills] = useState('');
  const [contactInfo, setcontactInfo] = useState('');
  const [yearsExperience, setyearsExperience] = useState('');

  // function onChangefirstLast(ev) {
  //   setfirstLast(ev.target.value);
  // }

  // function onChangetopSkills(ev) {
  //   settopSkills(ev.target.value);
  // }

  function onChangeyearsExperience(ev) {
    setyearsExperience(ev.target.value);
  }

  // function onChangecontactInfo(ev) {
  //   setcontactInfo(ev.target.value);
  // }

  function submit() {
    const formData = {
      firstLast: firstLast,
      topSkills: topSkills,
      contactInfo: contactInfo,
      yearsExperience: yearsExperience,

    };
    // Can also be written:
    // const formData = {title, text: content};

    fetch('/api/mongodb/blogposts/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        // props.history.push('/blog/');
      });
  }

  function Name(props) {
    return (
      <div> 
          <input
            name="yearsExperience"
            placeholder=""
            value={yearsExperience}
            /> 
            <button onClick={onChangeyearsExperience}>Submit</button>
        </div>
    );

  }

  function SubmitButton() {
    return (
      <div><button onClick={submit}>Submit</button></div>
    );
  }


  const steps = [
    {
      id: 'greeting',
      message: 'Welocome to chatbot resume.  Are you ready to upload your resume?',
      trigger: 'q-ready',
    },
    {
      id: 'q-ready',
      options: [
        {value: 'yes', label: 'Yes', trigger: 'name' },
        {value: 'no', label: 'Maybe Later', trigger: 'end-early'},
      ],
    },
    {
      id: 'name',
      component: < Name />,
      asMessage: true,
      trigger: 'submit'
    },
    {
      id: 'submit',
      component: < SubmitButton />,
      asMessage: true,
      trigger: 'end-message',
    },
    {
      id: 'end-early',
      message: 'Thanks for your time! Hope you have a wonderful life!',
      trigger: 'startover',
    },
    {
      id: 'end-message',
      message: 'Thanks! Your data was submitted successfully!',
      end: true,
    },
    {
      id: 'startover',
      options: [
        {value: 'yes', label: 'Start Over', trigger: 'greeting' },
      ],
    },
  ];


  return (
//     <div className="LandingPage">
      
// <div className="LandingPageHeading">
//   <img src={BotImage} className="BotImage" alt="BotLogo" /> 
//   {/* <div className="speech-bubble">Text</div> */}
//     </div>
//     <div className="Separator">

   
//     <div className="speech-bubble">Have a fun chat with Robbie the Bot and upload your resume. 
//     Recruiters will interview your bot version and get to know you before the real interview!</div>
    
//     </div>

//      <div className="BotDesign">
//         <ChatBot 
//             headerTitle="My Excellent Resume Chatbot"
//             // speechSynthesis={{ enable: true, lang: 'en' }}
//             steps={steps}/>  
//       </div>
//     </div>



<Container fluid >

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
                   <Nav.Link  className="myNavLinkUser2" href="/user/">Have a fun chat with Robbie the Bot and upload your resume. 
    Recruiters will interview your bot version and get to know you before the real interview!</Nav.Link>
                   <br/>
                   <Nav.Link className="myNavLinkRecruiter"  href="/recruiter/">Recruiter</Nav.Link>
                   <br/>
                   <Nav.Link className="myNavLinkAbout"  href="/about/">About</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
      
            </Navbar>
          </Col>
      
      
      
           <Col md={4}>
                        <BotResume 
                        />
             </Col>
          
      
             </Row>
            
      
          </Container>
  );
}

export default User;
