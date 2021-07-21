import React from 'react'
import PropTypes from 'prop-types'
import { Container,Row,Col,Card,ListGroup,Figure } from 'react-bootstrap';
import HalfImage from './HalfImage';
import styled from 'styled-components'
import './TwoColBlock.css'


const TwoColBlock = ({imageData,className}) => {
  return (
    <Container className="fullCont">
    <Row>
      <Col md={7} xs={12}>
     <HalfImage imageData={imageData}/>
  
      </Col>
  
      <Col>
      <div>
      <Card style={{margin: "2.5rem"}}>
        <Card.Body>
          <Card.Title>
            <h1>Card Title</h1>
            </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
                <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src=".\static\images\logo.png"
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </Card.Body>
      </Card>
      </div>
      </Col>
    </Row>
    </Container>
  )
}


export default TwoColBlock
