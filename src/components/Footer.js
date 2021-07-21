import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © {new Date().getFullYear()} KlokanEnergie s. r. o.
        </span>
      </div>
    </footer>
  </div>
)
