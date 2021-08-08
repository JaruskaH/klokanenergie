import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import './HomeIm.css'
import { Container,Row,Col,Card,Button,ListGroup,Figure } from 'react-bootstrap';
import { Link } from 'gatsby'

const HomeImage = ({ imageData }) => {
  return (
    <div>
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        className="HomeIm"
        backgroundColor={`#040e18`}
      >
    <Container className="fullCont">
    <Row>
      <Col xl={7} lg={6} md={5} sm={4} xs={0}>
  
      </Col>
  
      <Col xl={5} lg={6} md={7} sm={8} xs={12}>
        <div className="homediv" style={{ marginTop: '70px', marginLeft: '50px',}}>
        <h1 className="hometitle" style = {{fontSize: '5.8rem',fontWeight: '800'}}>Nízké ceny<br/>Osobní přístup</h1>
        <Link to="/plyn"><Button className="butto" variant="secondary" size="lg">
        <span style={{fontSize: '2rem'}}>Plyn</span>
    </Button></Link>
    <Link to="/elektrina"><Button className="butto" size="lg" variant="primary"><span style={{fontSize: '2rem'}}>Elektřina</span></Button></Link>

        </div>
      
      </Col>
    </Row>
    </Container>
          
      </BackgroundImage>
      <div>
        <div className="homedivmob" style={{ marginTop: '70px', marginLeft: '50px', marginLeft: '50px', marginBottom: "160px"}}>
        <h1 className="hometitle" style = {{color: "white", fontSize: '5rem',fontWeight: '800'}}>Nízké ceny<br/>Osobní přístup</h1>
        <Link to="/plyn"><Button className="butto" variant="secondary" size="lg">
        <span style={{fontSize: '2rem'}}>Plyn</span>
    </Button></Link>
    <Link to="/elektrina"><Button className="butto" size="lg" variant="primary"><span style={{fontSize: '2rem'}}>Elektřina</span></Button></Link>

        </div>
      </div> 
      </div>
  )
}

export default HomeImage