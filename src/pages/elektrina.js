import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'
import TwoColBlock from '../components/TwoColBlock'
import { graphql, useStaticQuery } from 'gatsby'
import { Container,Row,Col,Card,ListGroup,Figure } from 'react-bootstrap';
import HalfImage from '../components/HalfImage';
import Img from "gatsby-image"
import dwnfile from "../downloads/KlokanEnergieElektrinaEneka.pdf"

function ElektrinaPage(props) {
  const data = useStaticQuery(
    graphql`
      query {
        imback: file(relativePath: { eq: "Klokan_energie_eneka1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        graf: file(relativePath: { eq: "graf_eneka_elektrina.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  // Set ImageData.
  const imageData = data.imback.childImageSharp.fluid
  const graf = data.graf.childImageSharp.fluid
  return ( 
  <Layout
    meta={ false}
    title={ false}
  >
      <main className="DefaultPage">

      <Container className="fullCont">
    <Row className="whitebg">
      <Col md={7} xs={12}>
     <HalfImage imageData={imageData}/>
  
      </Col>
  
      <Col md={5} s={12}>
      <div>
      <h1 className="elekh1">Elektřina</h1>
      <p className="elekp">S Klokanem budete za elektřinu platit až <strong className="strongtext">o 20% levněji</strong> než u standardních dodavatelů, to však není to jediné, co Vám můžeme nabídnout. S Klokanem získáte navíc:</p>
      <ul className="eleklist">
        <li className="elekbullet">Jednoduché a přehledné vyúčtování</li>
        <li className="elekbullet">Zákaznická linka bez hlasového automatu</li>
        <li className="elekbullet">Ochotně Vám poradíme a pomůžeme s jakýmkoliv dotazem</li>
        <li className="elekbullet">Bude-li to potřeba, vyřešíme vše v pohodlí Vašeho domova</li>
      </ul>
      <h2 className="elekh2">Srovnání ceny s ostatními</h2>
      <Img fluid={graf} />
      <p className="elekp">Stáhněte si aktuální ceník KlokanEneka Plyn <a className="strongtext" href={dwnfile} download>zde</a></p>
      </div>
      </Col>
    </Row>
    </Container>


  </main>
  </Layout>
  )
}
export default ElektrinaPage
