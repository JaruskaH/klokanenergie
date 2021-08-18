import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'
import TwoColBlock from '../components/TwoColBlock'
import { graphql, useStaticQuery } from 'gatsby'
import { Container,Row,Col,Card,ListGroup,Figure } from 'react-bootstrap';
import HalfImage from '../components/HalfImage';
import GoogleMap from '../components/GoogleMap'

function KontaktPage(props) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "banner.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  const center={
    lat: 49.22779290956267, 
    lng: 16.581916263700442
  }
  return ( 
  <Layout
    meta={ false}
    title={ false}
  >
      <main className="DefaultPage">

      <Container className="fullCont">
    <Row className="whitebg">
  
      <Col md={7} xs={12}>
      <GoogleMap center={center}/>
  
      </Col>
  
      <Col>
      <div>
      <h1 className="elekh1">kontakty</h1>
      <p className="elekp">Kontaktní místo nemáme k dispozici.<br></br>
                          Vše řešíme telefonicky, e-mailem, poštou.<br></br>
                          V případě osobního kontaktu nás prosím kontaktujte.</p>
      <ul className="kontaktlist">
        <li className="eleknobullet"><strong className="strongtext">Mobilní linka:</strong><a href="tel:+420778429702"> 778 429 702</a></li>
        <li className="eleknobullet"><strong className="strongtext">e-mail:</strong><a href="mailto: info@klokanenergie.cz"> info@klokanenergie.cz</a></li>
        <br></br>
        <li className="eleknobullet"><strong className="strongtext">IČ:</strong> 09815384, DIČ: CZ09815384</li>
        <br></br>
        <li className="eleknobullet"><strong className="strongtext">Sídlo společnosti:</strong></li>
        <li className="eleknobullet">Purkyňova 2921/103</li>
        <li className="eleknobullet">Královo Pole</li>
        <li className="eleknobullet">612 00 Brno</li>
      </ul>
      </div>
      </Col>
    </Row>
    </Container>


  </main>
  </Layout>
  )
}
export default KontaktPage
