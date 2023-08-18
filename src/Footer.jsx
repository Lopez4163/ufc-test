import React from "react"
import "./Footer.css"
import instagram from "./assets/instagram.png"
import github from "./assets/github.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-left">
        <a
          href="https://www.instagram.com/nickk_adre/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" className="footer-ig" />
        </a>
      </div>
      <h4>
        &copy; {new Date().getFullYear()} Tactically Aquired UFC Data. All
        rights reserved to no one, programmer does what he wants!
      </h4>
      <div className="footer-social-right">
        <a
          href="https://github.com/Lopez4163"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="footer-git" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
