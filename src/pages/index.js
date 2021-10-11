import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'
import TwoColBlock from '../components/TwoColBlock'
import { graphql, useStaticQuery } from 'gatsby'
import { Container,Row,Col,Card,ListGroup,Figure } from 'react-bootstrap';
import HomeImage from "../components/HomeIm"
import ima from "../../static/images/vyhrajautouvodni.png"
import {Link} from 'gatsby'

function HomePage(props) {

  
  const data = useStaticQuery(
    graphql`
    query {
      desktop: file(relativePath: { eq: "klokan_energie_eneka2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktop2: file(relativePath: { eq: "Klokan_energie_eneka4.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    
    `
  )
  console.log(data)
  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;
  const imageDataMob = data.desktop2.childImageSharp.fluid;


  const badge = <Link to="/vyhrajauto"><img className='pulkruhim' src={ima} /></Link>;
  return ( 
  <Layout
    meta={ false}
    title={ false}
  >
  <main className="Home">
  <HomeImage
      imageData={imageData}
      imageDataMob={imageDataMob}
      badge={ima}
  />
  </main>
  </Layout>
  
  )
}

export default HomePage
