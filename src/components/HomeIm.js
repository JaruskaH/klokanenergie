import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import './HomeIm.css'
import { Container,Row,Col,Card,Button,ListGroup,Figure } from 'react-bootstrap';
import { Link } from 'gatsby'

const HomeImage = ({ imageData }) => {
  return (
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className="HomeIm"
        backgroundColor={`#040e18`}
      >
    <Container className="fullCont">
    <Row>
      <Col md={7} xs={0}>
  
      </Col>
  
      <Col md={5} s={12}>
        <div style={{ marginTop: '70px'}}>
        <h1 style = {{fontSize: '6rem',fontWeight: '800'}}>Nizké ceny<br/>Osobní přístup</h1>
        <Link to="/plyn"><Button className="butto" variant="secondary" size="lg">
        <span style={{fontSize: '2rem'}}>Plyn</span>
    </Button></Link>
    <Link to="/elektrina"><Button className="butto" size="lg" variant="primary"><span style={{fontSize: '2rem'}}>Elektřina</span></Button></Link>

        </div>
      
      </Col>
    </Row>
    </Container>
          
      </BackgroundImage> 
  )
}

export default HomeImage