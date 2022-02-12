import React from "react";
import { Link } from "react-router-dom";
import { ImInfinite } from "react-icons/im";
import github from "../../../assets/img/github.png";
import linkedin from "../../../assets/img/linkedin.png";
import email from "../../../assets/img/email.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container animate__animated animate__fadeInDownBig">
      <div className="title">
        <h1>Contact me</h1>
        <span>
          <ImInfinite />
        </span>
      </div>

      <div className="contact__container">
        <div className="contact-card">
          <Link
            to={{ pathname: "https://github.com/dlmarques" }}
            target="_blank"
          >
            <img src={github} alt="" />
          </Link>
          <Link
            to={{ pathname: "https://github.com/dlmarques" }}
            target="_blank"
          >
            <h3>Github</h3>
          </Link>
        </div>
        <div className="contact-card">
          <Link
            to={{ pathname: "https://www.linkedin.com/in/dlmarques/" }}
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </Link>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/dlmarques/" }}
            target="_blank"
          >
            <h3>LinkedIn</h3>
          </Link>
        </div>
        <div className="contact-card">
          <Link
            to={{ pathname: "mailto:daniel.marquesedigital@gmail.com" }}
            target="_blank"
          >
            <img src={email} alt="" />
          </Link>
          <Link
            to={{ pathname: "mailto:daniel.marquesedigital@gmail.com" }}
            target="_blank"
          >
            <h3>E-mail</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
