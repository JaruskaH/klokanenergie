import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'
import TwoColBlock from '../components/TwoColBlock'
import { graphql, useStaticQuery } from 'gatsby'
import { Container,Row,Col,Card,ListGroup,Figure } from 'react-bootstrap';
import HalfImage from '../components/HalfImage';

function PravidlaPage(props) {
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
      <h1 className="elekh1">O nás</h1>
      <p className="elekp">Společnost <strong className="strongtext">KlokanEnergie</strong> byla založena v symbolické datum 12.02.2021 a cílem tohoto projektu je navázat na <strong className="strongtext">dlouholeté zkušenosti v oblasti dodávek elektřiny a plynu</strong>, které jsem postupně nasbíral v předchozích letech.</p>
      <p className="elekp">Již od roku 2006 mě zajímala <strong className="strongtext">problematika dodávání elektřiny a plynu</strong> do domácností. Při své práci jsem měl možnost hovořit <strong className="strongtext">s velkým množstvím zákazníků</strong> z řad domácností a velmi často jsem pomáhal řešit dotazy, náměty a problémy, které se týkaly právě elektřiny a plynu. Velmi často jsem pak <strong className="strongtext">pomáhal řešit našim klientům potíže</strong> při komunikaci se svým dodavatelem.  Webové stránky obchodníků slibují nízké ceny, osobní přístup, jednoduchost, ale skutečnost je často úplně jiná…</p>
      </div>
      </Col>
    </Row>
    </Container>


  </main>
  </Layout>
  )
}
export default PravidlaPage
