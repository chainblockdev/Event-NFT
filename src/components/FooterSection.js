import React from 'react';
import './FooterSection.css';
import logo from './Logo.png'; // Make sure to update the path to your logo image

const FooterSection = () => (
  <footer className="footer-wrapper">
    <div className="footer-content">
      <div className="footer-column">
        <img src={logo} alt="EventiNFT Logo" className="footer-logo" />
        <p>EventiNFT Matera consente l'acquisto di biglietti per eventi culturali tramite tecnologia blockchain, garantendo autenticità e sicurezza. Ogni biglietto diventa un oggetto da collezione digitale, offrendo esperienze esclusive e personalizzate.</p>
        <div className="social-icons">
          <a href="https://facebook.com"><img src={process.env.PUBLIC_URL + '/Facebook Icon.png'} alt="Facebook" /></a>
          <a href="https://instagram.com"><img src={process.env.PUBLIC_URL + '/Instagram Icon.png'} alt="Instagram" /></a>
          <a href="https://linkedin.com"><img src={process.env.PUBLIC_URL + '/Linkedin Icon.png'} alt="LinkedIn" /></a>
        </div>
      </div>
      <div className="footer-column">
        <h3>EventiNFT</h3>
        <ul>
          <li><a href="#eventi">Eventi</a></li>
          <li><a href="#acquista">Acquista</a></li>
          <li><a href="#tickets">Tickets</a></li>
          <li><a href="#wallet">Wallet</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Utility</h3>
        <ul>
          <li><a href="#press">Press</a></li>
          <li><a href="#contattaci">Contattaci</a></li>
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#terms">Terms</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="stay-in-the-loop-title">Stay In The Loop</h3>
        <p className="stay-in-the-loop-description">Join our mailing list to stay in the loop with our newest for Event and concert</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email address.." />
          <button type="submit">Iscriviti ora</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <hr className="footer-line" />
      <p>Copyright © 2024 More. Web Design</p>
    </div>
  </footer>
);

export default FooterSection;
