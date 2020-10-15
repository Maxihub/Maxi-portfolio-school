import React from "react"
import SocialLinks from "../constants/socialLinks"

//Simple footer component with links and quickinfo
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>Maximilian</span> | all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer