import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Navbar, Figure, Nav  } from 'react-bootstrap';
import './About.css';
import BotResume from '../BotResume/BotResume.js';
import BotImage from './Susanbot_2.png';


function AboutPage() {

  return (
//     <div  className="LandingPage">
      
// <div  className="LandingPageHeading">
//   <img src={BotImage} className="BotImage" alt="BotLogo" /> 
//   {/* <div className="speech-bubble">Text</div> */}
//     </div>
//     <div  className="Separator">

    
//     <div style = {{ flexDirection:"row", flex: "1", flexWrap: "wrap", color: "#410074", font: "35px bold Avenir sans-serif"}}   className="speech-bubble-about"><br/>Hi there! I'm Robbie, your friendly Resume Bot. 
//     Answer my questions and I will sweat out the interview for you. 
//     I'll make you look like a pro!</div>
    
//     </div>

//      <div className="BotDesign">
//                   <BotResume />
//        </div>
//     </div>
//   );
// }

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
                   <Nav.Link  className="myNavLinkAbout" href="/about/">Hi there! I'm Robbie, your friendly Resume Bot. 
    Answer my questions and I will sweat out the interview for you. 
    I'll make you look like a pro!</Nav.Link>
                   <br/>
                   <Nav.Link className="myNavLinkCommon"  href="/recruiter/">Recruiter</Nav.Link>
                   <br/>
                   <Nav.Link className="myNavLinkCommon"  href="/user/">User</Nav.Link>
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

export default AboutPage;
