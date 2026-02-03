import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side: Brand/Name */}
        <div className="footer-brand">
          <h3>ANKUR<span className="logo-dot">.DEV</span></h3>
          <p>Full Stack Developer & Student</p>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="footer-socials">
          <a href="https://github.com/ankuryadav" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/ankuryadav" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/ninja.1ai" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="mailto:your-email@example.com"><FaEnvelope /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Ankur Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;