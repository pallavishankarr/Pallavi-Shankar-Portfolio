import React from 'react'
import '../App.css'
import contactData from '../data/contact'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <h3 className="footer__name">Pallavi Shankar</h3>
            <p className="footer__description">Aspiring Software Engineer</p>
            <p className="footer__email">{contactData.email}</p>
          </div>
          
          <div className="footer__social">
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <i className="uil uil-github-alt"></i>
            </a>
            <a href={`mailto:${contactData.email}`} className="footer__social-link">
              <i className="uil uil-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; 2024 Pallavi Shankar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
