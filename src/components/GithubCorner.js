import React from 'react'
import './GithubCorner.css'

export default ({ url, style, className = '', color = '#151513' }) => (
  <a
    className={`GithubCorner ${className}`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View source on Github"
    style={style}
  >
  <div
    className="Logo"
    style={{
      backgroundImage: `url(/images/rychly_kontakt.svg)`, width: '170px'
    }}
  />
  </a>
)
