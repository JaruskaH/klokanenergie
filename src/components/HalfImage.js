import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import './HalfImage.css'

const HalfImage = ({ imageData }) => {
  return (
      <BackgroundImage
        Tag="div"
        fluid={imageData}
        className="halfIm"
        backgroundColor={`#040e18`}
      >
      </BackgroundImage> 
  )
}

export default HalfImage