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
    lat: 49.2276528,
    lng: 16.5799636
  }
  return ( 
  <Layout
    meta={ false}
    title={ false}
  >
      <main className="DefaultPage">

      <Container className="fullCont">
    <Row>
  
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
        <li className="eleknobullet"><strong className="strongtext">Linky pro zákazníky:</strong></li>
        <li className="eleknobullet">Ze sítě KlokanMobil: *55</li>
        <li className="eleknobullet"><strong className="strongtext">Pevná linka:</strong> 530 333 144</li>
        <li className="eleknobullet"><strong className="strongtext">Mobilní linka:</strong> 778 144 144</li>
        <li className="eleknobullet"><strong className="strongtext">e-mail:</strong> info@klokanmobil.cz</li>
        <li className="eleknobullet">Všední dny 9:00 - 16:00 hod</li>
        <br></br>
        <li className="eleknobullet"><strong className="strongtext">IČ:</strong> 03118932, DIČ: CZ03118932</li>
        <li className="eleknobullet"><strong className="strongtext">Bankovní spojení:</strong> 776626/5500</li>
        <br></br>
        <li className="eleknobullet"><strong className="strongtext">Sídlo společnosti:</strong></li>
        <li className="eleknobullet">Purkyňova 103 , 612 00 Brno</li>
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
