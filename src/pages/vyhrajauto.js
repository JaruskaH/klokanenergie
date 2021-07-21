import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'
import TwoColBlock from '../components/TwoColBlock'
import { graphql, useStaticQuery } from 'gatsby'
import { Container,Row,Col,Card,ListGroup,Figure } from 'react-bootstrap';
import HalfImage from '../components/HalfImage';

function VyhrajautoPage(props) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "Klokan_energie_eneka3.jpg" }) {
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
    <Row className="vyhrajbbg">
      <Col md={5} xs={12}>
     <HalfImage imageData={imageData}/>
  
      </Col>
  
      <Col md={7} s={12}>
      <div>
      <p className="vyhrajp">Ještě stále zvažujete jestli využít nabídky na levnější elektřinu a plyn?<br></br> Tak to si udělejte ještě pár minut času a přečtěte si následující informace, protože <br></br><strong className="strongtextvyhraj">takováto šance tady ještě NIKDY NEBYLA !</strong></p>
      <p className="vyhrajredtext">Získejte 300.000 na nákup nového automobilu</p>
      <p className="vyhrajp">a přitom nemusíte zaplatit jedinou korunu. Stačí „investovat“ jen několik minut vašeho času a chuť to zkusit. Šance na výhru je tak vysoká, že tomu nejdříve ani nebudete chtít uvěřit.  Pokud například začnete využívat naše služby u elektřiny a plynu, <strong className="strongtextvyhraj">hned máte šanci 1:300, že automobil získáte právě VY.</strong></p>
      <p className="vyhrajp">Pokud však doporučíte naše služby i svým přátelům nebo ve Vaší rodině…můžete za toto doporučení získat další losy a <strong className="strongtextvyhraj">svoji šanci zvýšit až na 1:20 !!! </strong></p>
      </div>
      </Col>
    </Row>
    </Container>


  </main>
  </Layout>
  )
}
export default VyhrajautoPage
