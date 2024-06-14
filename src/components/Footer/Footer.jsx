import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

import { BsGithub } from "react-icons/bs";
import("./Footer.css");

const Footer = () => {
  return (
    <footer>
      <div className="">
        <a href="#logo" className="footer__logo">
          ABDUL AHAD
        </a>

        <ul className="permalinks">
          <li>
            <a href="header">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="experience">Experience</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/xmarty.ahad">
            <FaFacebookF />
          </a>
          <a href="https://github.com/AHAdd40451">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/abdul-ahad-314197250/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; Abdul Ahad. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
