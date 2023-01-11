import React from "react";
import { ImInfinite } from "react-icons/im";
import { Link } from "react-router-dom";
import { AiOutlineAim, AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import growy from "../../../assets/img/growyourself.png";
import dental from "../../../assets/img/dentalbooking.png";
import ezlearn from "../../../assets/img/ezlearn.png";
import omenia from "../../../assets/img/omenia.png";
import "./Projects.scss";

const Projects = () => {
  return (
    <div
      className="projects-container animate__animated animate__fadeInDownBig"
      id="projects-page"
    >
      <div className="title">
        <h1>Projects</h1>
        <span>
          <ImInfinite />
        </span>
      </div>

      <div className="projects__container">
        <div className="project">
          <img src={dental} alt="project" id="img" />
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
                  Dental Booking is an app to improve health services, to
                  facilitate contact between patient and clinic.
                </p>
                <h3>Skills used:</h3>
                <p>React.js, SASS, Node.js, Express.js, MongoDB, Firebase</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={ezlearn} alt="project" id="img" />
          <div className="overlay">
            <div className="left">
              <span className="aim">
                <AiOutlineAim className="aim-icon" />
              </span>
              <div className="external-link-left">
                <span>
                  <Link
                    to={{
                      pathname: "https://github.com/dlmarques/GrowYourself",
                    }}
                    target="_blank"
                  >
                    <AiOutlineGithub />
                  </Link>
                </span>
                <span>
                  <Link
                    to={{ pathname: "https://ez-learn-app.netlify.app/" }}
                    target="_blank"
                  >
                    <BiLinkExternal />
                  </Link>
                </span>
              </div>
            </div>
            <div className="right">
              <div className="text">
                <h1>EzLearn</h1>
                <p>
                  E-learning platform project with Calendar to book your tasks,
                  to-do list, courses list, and file manager.
                </p>
                <h3>Skills used:</h3>
                <p>React.js, Redux, SASS, ExpressJS, MongoDB, Firebase</p>
                <div className="external-link">
                  <span>
                    <Link
                      to={{ pathname: "https://github.com/dlmarques/ezlearn" }}
                      target="_blank"
                    >
                      <AiOutlineGithub />
                    </Link>
                  </span>
                  <span>
                    <Link
                      to={{ pathname: "https://ez-learn-app.netlify.app/" }}
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
          <img src={omenia} alt="project" id="img" />
          <div className="overlay">
            <div className="left">
              <span className="aim">
                <AiOutlineAim className="aim-icon" />
              </span>
              <div className="external-link-left">
                <span>
                  <Link
                    to={{
                      pathname: "https://github.com/dlmarques/GrowYourself",
                    }}
                    target="_blank"
                  >
                    <AiOutlineGithub />
                  </Link>
                </span>
                <span>
                  <Link
                    to={{
                      pathname: "https://github.com/dlmarques/GrowYourself",
                    }}
                    target="_blank"
                  >
                    <BiLinkExternal />
                  </Link>
                </span>
              </div>
            </div>
            <div className="right">
              <div className="text">
                <h1>Omenia</h1>
                <p>Omenia is an online RPG web game</p>
                <h3>Skills used:</h3>
                <p>React.js, SASS, Node.js, Express.js, MongoDB, Socket.io</p>
                <div className="external-link">
                  <span>
                    <Link
                      to={{
                        pathname: "https://github.com/dlmarques/omenia",
                      }}
                      target="_blank"
                    >
                      <AiOutlineGithub />
                    </Link>
                  </span>
                  <span>
                    <Link
                      to={{
                        pathname: "https://omenia.netlify.app/",
                      }}
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
