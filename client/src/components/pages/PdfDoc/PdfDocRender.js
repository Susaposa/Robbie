import React from 'react';
import {PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './PdfDoc.js';
import { Col, Container, Row } from 'react-bootstrap';


function PdfDocRender (props){
  console.log("props log")
  console.log(props)
  console.log(props.location)

  const name = props.location.state.myDet.myDet.name.value
  const gender = props.location.state.myDet.myDet.gender.value


    var myDet2 ={
        name: name,
        gender: gender
    }


//    const tempEd3 = props.tempEd3


    return(
        <Container fluid>
            <Row fluid>
                <Col md="12">

                    <MyDocument myDet = { myDet2 }/>
                </Col>
            


        <PDFDownloadLink document={<MyDocument myDet = {myDet2}/>} fileName="mypdf.pdf">
            {({ blob, url, loading, error }) => (loading ? 'loading document...' : 'Download now!')}

        </PDFDownloadLink>
        </Row>
        </Container>

    );

    }
export default PdfDocRender;