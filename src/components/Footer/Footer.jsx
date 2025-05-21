import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h3>
            Let’s Collaborate <br />
            Work{"@"}typodeep{"."}com
          </h3>

          <p className="secondary">
            From short films to full productions — I’m always open to creative
            collaborations. Feel free to reach out anytime.
          </p>

          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Home</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Work</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>About</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contact</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/faq" className="footer-nav-item">
            <span>FAQ</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>Deep Patel</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; Heet Pro 2025</p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/typodeep/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/typodeep/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.behance.net/typodeep" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://x.com/typodeep" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://discord.com/invite/u9qzvmHBUV" target="_blank" rel="noopener noreferrer">Hueman</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
