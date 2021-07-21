import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'
import TwoColBlock from '../components/TwoColBlock'
import { graphql, useStaticQuery } from 'gatsby'
import { Container,Row,Col,Card,ListGroup,Figure } from 'react-bootstrap';
import HalfImage from '../components/HalfImage';

function PlynPage(props) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "Klokan_energie_eneka1.jpg" }) {
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

  return ( 
  <Layout
    meta={ false}
    title={ false}
  >
      <main className="DefaultPage">

      <Container className="fullCont">
    <Row>
      <Col md={7} xs={12}>
     <HalfImage imageData={imageData}/>
  
      </Col>
  
      <Col>
      <div>
      <h1 className="elekh1">Plyn</h1>
      <p className="elekp">S Klokanem budete za plyn platit až <strong className="strongtext">o 20% levněji</strong> než u standardních dodavatelů, to však není to jediné, co Vám můžeme nabídnout. S Klokanem získáte navíc:</p>
      <ul className="eleklist">
        <li className="elekbullet">Jednoduché a přehledné vyúčtování</li>
        <li className="elekbullet">Zákaznická linka bez hlasového automatu</li>
        <li className="elekbullet">Ochotně Vám poradíme a pomůžeme s jakýmkoliv dotazem</li>
        <li className="elekbullet">Bude-li to potřeba, vyřešíme vše v pohodlí Vašeho domova</li>
      </ul>
      <h2 className="elekh2">Srovnání ceny s ostatními</h2>
      <img src="logo.png"></img>
      <p className="elekp">Stáhněte si aktuální ceník KlokanEneka Plyn <a className="strongtext" href="url">zde</a></p>
      </div>
      </Col>
    </Row>
    </Container>


  </main>
  </Layout>
  )
}
export default PlynPage
