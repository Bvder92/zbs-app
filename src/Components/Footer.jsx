import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Louez votre logement quand vous voulez !</h3>
          <p>Email: 360hostcontact@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>POUR NOUS CONNAÎTRE</h3>
          <ul>
            <li><a href="#">Tarifs</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Qui sommes-nous ?</a></li>
            <li><a href="#">Confidentialité</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>BESOIN DE PLUS D'INFOS ?</h3>
          <ul>
            <li><a href="#">Foire aux questions</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/company/360host/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/360host.fr/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
