import React from 'react';
import { Link } from 'react-router-dom'
// import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Container, Row, Col, Navbar, Figure, Nav  } from 'react-bootstrap';
import './LandingPage.css';
import BotResume from '../BotResume/BotResume.js';
import BotImage from './Susanbot_2.png';
import './LandingPage2.css';
import MyDocument from '../PdfDoc/PdfDoc.js';




function LandingPage() {

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
             <Nav.Link  className="myNavLink" href="/about/">About</Nav.Link>
             <br/>
             <Nav.Link className="myNavLink"  href="/recruiter/">Recruiter</Nav.Link>
             <br/>
             <Nav.Link className="myNavLink"  href="/user/">User</Nav.Link>
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

export default LandingPage;