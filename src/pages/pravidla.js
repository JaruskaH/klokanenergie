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
  
      <Col md={7} xs={12}>
      <div>
      <h1 className="pravidlasout">Pravidla soutěže</h1>
      <ol className="pravidlalist">
        <li className="pravidlano">Celkový počet losů pro akci <strong >„Vyhraj auto“</strong> je stanoven na <strong>600 kusů.</strong></li>
        <li className="pravidlano">Jednotlivé losy budou přiděleny na základě níže stanovených pravidel.Seznam přidělených losů bude uložen u Notářské kanceláře XXX, která dohlédne na dodržení všech stanovených pravidel a zúčastní se závěrečného losování.</li>
        <li className="pravidlano">Společnost <strong>KlokanEnergie</strong> se zavazuje uhradit částku <strong>300.000 Kč</strong> včetně DPH nejpozději do 10dnů od uzavření soutěže. Tato částka je určena výhradně na nákup automobilu v předem dohodnutém autosalonu XXX.</li>
        <li className="pravidlano">Majitel výherního losu <strong>si může vybrat jakýkoliv automobil</strong> z aktuální nabídky autosalonu. V případě nákupu automobilu s vyšší prodejní cenou, zaplatí společnost KlokanEnergie částku 300.000Kč včetně DPH a majitel výherního losu zaplatí pouze zbytek ceny. </li>
        <li className="pravidlano">Nárok na jeden los <strong>má každý zákazník</strong>, který <strong>uzavře smlouvu se společností Eneka</strong> a začne odebírat zemní plyn nebo elektřinu na příslušném odběrném místě.</li>
        <li className="pravidlano">V případě, že lze předpokládat na jednom odběrném místě vyšší spotřebu než 10Mw za jeden rok, má zákazník, který uzavřel smlouvu, nárok na další los za toto odběrné místo.</li>
        <li className="pravidlano">Nárok na jeden los má dále každá osoba, která doporučí jiného zákazníka s odběrným místem. V případě, doporučení zákazníka s odběrným místem, kde lze předpokládat vyšší spotřebu než 10Mw za jeden rok, má osoba, která doporučila, nárok na další los za toto doporučené odběrné místo.</li>
        <li className="pravidlano">V případě, že má účastník soutěže nárok na jeden nebo více losů a nemá zájem využít účasti ve slosování o automobil, může přenechat tento los jiné osobě. Toto výslovné přání lze učinit nejpozději jeden den před vyhlášeným uzavřením soutěže a to pouze písemnou formou s úředně ověřeným podpisem.</li>
        <li className="pravidlano">Počet losů, který získá jedna osoba na základě stanovených pravidel je omezen na počet 30 losů na jednu osobu.</li>
        <li className="pravidlano">Aktuální počet přidělených losů a předpokládané datum losování a termín losování bude pravidelně zveřejňován na internetových stránkách www.klokanenergie.cz, účastníci soutěže budou také pravidelně informováni formou SMS, emailem nebo prostřednictvím sociálních sítí.</li>
      </ol>
      </div>
      </Col>
    </Row>
    </Container>


  </main>
  </Layout>
  )
}
export default PravidlaPage
