import React, { useState } from "react";
import { ImInfinite } from "react-icons/im";
import { Link } from "react-router-dom";
import { AiOutlineAim, AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import growy from "../../../assets/img/growyourself.png";
import dental from "../../../assets/img/dentalbooking.png";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects-container animate__animated animate__fadeInDownBig">
      <div className="title">
        <h1>Projects</h1>
        <span>
          <ImInfinite />
        </span>
      </div>

      <div className="projects__container">
        <div className="project">
          <img src={growy} alt="" id="img" />
          <div className="overlay">
            <div className="left">
              <span className="aim">
                <AiOutlineAim className="aim-icon" />
              </span>
            </div>
            <div className="right">
              <div className="text">
                <h1>GrowYourself</h1>
                <p>
                  GrowYourself is a project for sports and wellness lovers, in
                  order to help and bring more people to sport!
                </p>
                <h3>Skills used:</h3>
                <p>React.js, SASS, Node.js, Express.js, MongoDB</p>
                <div className="external-link">
                  <span>
                    <Link
                      to={{ pathname: "https://github.com/dlmarques/GrowYourself" }}
                      target="_blank"
                    >
                      <AiOutlineGithub />
                    </Link>
                  </span>
                  <span>
                    <Link
                      to={{ pathname: "https://github.com/dlmarques/GrowYourself" }}
                      target="_blank"
                    >
                      <BiLinkExternal />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={dental} alt="" id="img" />
          <div className="overlay">
            <div className="left">
              <span className="aim">
                <AiOutlineAim className="aim-icon" />
              </span>
            </div>
            <div className="right">
              <div className="text">
                <h1>Dental Booking</h1>
                <p>
                  DentalBooking is an app to improve health services, to
                  facilitate contact between patient and clinic.
                </p>
                <h3>Skills used:</h3>
                <p>React.js, CSS3, Node.js, Express.js, MongoDB, Firebase</p>
                <div className="external-link">
                  <span>
                    <Link
                      to={{ pathname: "https://github.com/dlmarques/DentalBooking" }}
                      target="_blank"
                    >
                      <AiOutlineGithub />
                    </Link>
                  </span>
                  <span>
                    <Link
                      to={{ pathname: "https://github.com/dlmarques/DentalBooking" }}
                      target="_blank"
                    >
                      <BiLinkExternal />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
