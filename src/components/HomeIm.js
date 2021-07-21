import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import './HomeIm.css'
import { Container,Row,Col,Card,ListGroup,Figure } from 'react-bootstrap';

const HomeImage = ({ imageData }) => {
  return (
      <BackgroundImage
        Tag="div"
        fluid={imageData}
        className="HomeIm"
        backgroundColor={`#040e18`}
      >
    <Container className="fullCont">
    <Row>
      <Col md={7} xs={0}>
  
      </Col>
  
      <Col md={5} s={12}>
      <h1>ahoj</h1>
      </Col>
    </Row>
    </Container>
          
      </BackgroundImage> 
  )
}

export default HomeImage