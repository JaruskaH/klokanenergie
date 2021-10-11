import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import './HomeIm.css'
import HalfImage from './HalfImage';

import { Container,Row,Col,Card,Button,ListGroup,Figure } from 'react-bootstrap';
import { Link } from 'gatsby'
import Img from "gatsby-image"

const HomeImage = ({ imageData,imageDataMob,badge }) => {

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
        <h1 className="hometitle" style = {{fontSize: '5.8rem',fontWeight: '800',}}>Nízké ceny<br/>Osobní přístup</h1>
        <div className="buttodiv">
        <Link to="/plyn"><Button className="butto" variant="secondary" size="lg">
        <span style={{fontSize: '2rem'}}>Plyn</span>
        
    </Button></Link>
    <Link to="/elektrina"><Button className="butto" size="lg" variant="primary"><span style={{fontSize: '2rem'}}>Elektřina</span></Button></Link>
    </div>
        </div>
      
      </Col>
    </Row>
    </Container>
    <Link to="/vyhrajauto"><img className='pulkruhim' src={badge} /></Link> 
      </BackgroundImage>
      <div>
        <div className="homedivmob">
        <Row style={{ backgroundColor: "#022F4E"}}>
      <Col md={6} sm={6} xs={6}>
      <HalfImage imageData={imageDataMob} />
      </Col>
  
      <Col md={6} sm={6} xs={6}>
        <p className="vyhrajautomob" style={{ marginTop: '60px', marginBottom: "60px"}}>a ještě k tomu<br/><strong className="strongtextvawhite">vyhrajte auto</strong><br/>šance až 1 : 20</p>
      </Col>
    </Row> 
       
        </div>
      </div> 
      </div>
  )
}

export default HomeImage