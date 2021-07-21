import React from 'react'
import { Link } from 'gatsby'

import './NavLink.css'
vVSV
export default ({ className, children, ...props }) => ( 
  <Link {...props} className={`NavLink ${className || ''}`}>
    {children}
  </Link> 
)
