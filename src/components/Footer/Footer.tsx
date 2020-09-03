import React from "react";
import "./Footer.scss";
import { ChevronUp, Logo, Map, Mail } from "../svg/Svgs";
import { orange } from "../../constants/colors";

const links = ["Home", "Download", "Pricing", "About"];
const support = ["FAQ", "How it works", "Features", "Contact"];
const sociallinks = ["Facebook", "LinkedIn", "Twitter", "Instagram"];

const Footer = () => (
  <footer>
    <div className="section">
      <Logo size={100} />
      <div className="row">
        <Map size={12} color={orange} />
        <p className="link">
          York Street &, Jay St, Brooklyn, NY 11201, United States.
        </p>
      </div>
      <div className="row">
        <Mail size={12} color={orange} />
        <p className="link">Chef@gmail.com</p>
      </div>
    </div>
    <div className="section">
      <p className="title">Links</p>
      {links.map((link, index) => (
        <p className="link" key={index}>
          {link}
        </p>
      ))}
    </div>
    <div className="section">
      <p className="title">Support</p>
      {support.map((link, index) => (
        <p className="link" key={index}>
          {link}
        </p>
      ))}
    </div>
    <div className="section">
      <p className="title">Links</p>
      {sociallinks.map((link, index) => (
        <p className="link" key={index}>
          {link}
        </p>
      ))}
    </div>
    <button onClick={() => window.scrollTo(0, 0)} className="scroll-up-button">
      <ChevronUp size={12} color="#fff" />
    </button>
  </footer>
);

export default Footer;
