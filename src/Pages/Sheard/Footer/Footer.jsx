import React from "react";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "./footer.css";
import logo from "./logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10  text-base-content">
        <div>
          <img src={logo} alt="" />
          <p className="text-white">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
          <div className="flex ">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiFillGoogleCircle className="social-icons"></AiFillGoogleCircle>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <AiFillTwitterCircle className="social-icons"></AiFillTwitterCircle>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <AiFillInstagram className="social-icons"></AiFillInstagram>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <AiFillLinkedin className="social-icons"></AiFillLinkedin>
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title">About</span>
          <a href="" className="link link-hover">
            Service
          </a>
          <a href="" className="link link-hover">
            Home
          </a>
          <a href="" className="link link-hover">
            Contact
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="" className="link link-hover">
            Why Car Doctor
          </a>
          <a href="" className="link link-hover">
            About
          </a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a href="" className="link link-hover">
            Support Center
          </a>
          <a href="" className="link link-hover">
            Feedback
          </a>
          <a href="" className="link link-hover">
            Accessability
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
