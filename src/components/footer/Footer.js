import React from 'react'
import './Footer.css'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <h4 className="f-lang">Frontend Developer</h4>
            <h4 className="f-name">	&copy; Copyright, Made by Dev. Dami</h4>
            <div className="f-icons">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Tweeter</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    </div>
  )
}

export default Footer