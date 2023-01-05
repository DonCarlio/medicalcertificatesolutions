import React from 'react';
import {IoLogoTwitter} from 'react-icons/io';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p> Copyright &copy; 2023 | Medical Certificate Solutions</p>
      <div className="footer__socials">
        <a href="https://twitter.com/MedicalCert1" target='_blank' rel="noreferrer"><IoLogoTwitter/></a>
        <a href="https://www.facebook.com/profile.php?id=100067460828588" target='_blank' rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/medical_certificate_solutions/" target='_blank' rel="noreferrer"><FiInstagram /></a>
      </div>
    </footer>
  )
}

export default Footer
