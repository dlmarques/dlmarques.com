import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
import "./About.scss";
import { ImInfinite } from "react-icons/im";
import { FaMedkit, FaCogs, FaBook, FaMobileAlt, FaMusic } from "react-icons/fa";
import {
  MdFastfood,
  MdVideogameAsset,
  MdFitnessCenter,
  MdOutlineAirplanemodeActive,
  MdOutlineLocalMovies,
} from "react-icons/md";
import { BsDisplay } from "react-icons/bs";
import photo from "../../../assets/img/infophoto.png";

const About = () => {
  return (
    <>
      <div className="about-container animate__animated animate__fadeInDownBig">
        <div className="title">
          <h1>About Me</h1>
          <span>
            <ImInfinite />
          </span>
        </div>

        <div className="about-card">
          <div className="left">
            <img src={photo} alt="" />
            <Link
              to={{
                pathname:
                  "https://drive.google.com/file/d/11EgWYdWt1fUBJfjUaPTMKMSFntliGo75/view?usp=sharing",
              }}
              target="_blank"
            >
              <button>Download CV</button>
            </Link>
          </div>
          <div className="right">
            <p>
              Hi! I'm Daniel Marques. <br />
              <br />
              I'm a self-taught web developer very passionate about creating and
              bringing my imaginary projects to reality. I'm Portuguese
              currently living in Lisbon. <br />
              <br />
              Too passionate about my healthy lifestyle and training every day,
              I think it's one of my biggest hobbies, another one is undoubtedly
              traveling and getting to know new cultures!
            </p>
          </div>
        </div>
        <div className="title">
          <h1>My Interests</h1>
          <span>
            <ImInfinite />
          </span>
        </div>
        <div className="interests">
          <div className="inter-card">
            <div className="inter-icon">
              <MdFitnessCenter className="icons-int" />
              <div className="desc-inter">Workout</div>
            </div>
            <div className="inter-icon">
              <FaMusic className="icons-int" />
              <div className="desc-inter">Music</div>
            </div>
            <div className="inter-icon">
              <MdOutlineAirplanemodeActive className="icons-int" />
              <div className="desc-inter">Travelling</div>
            </div>
            <div className="inter-icon">
              <MdOutlineLocalMovies className="icons-int" />
              <div className="desc-inter">Movies</div>
            </div>
            <div className="inter-icon">
              <MdVideogameAsset className="icons-int" />
              <div className="desc-inter">Video Games</div>
            </div>
            <div className="inter-icon">
              <FaMobileAlt className="icons-int" />
              <div className="desc-inter">Tech</div>
            </div>
            <div className="inter-icon">
              <MdFastfood className="icons-int" />
              <div className="desc-inter">Food</div>
            </div>
            <div className="inter-icon">
              <FaBook className="icons-int" />
              <div className="desc-inter">Books</div>
            </div>
          </div>
        </div>

        <div className="title">
          <h1>Services</h1>
          <span>
            <ImInfinite />
          </span>
        </div>
        <div className="services-container">
          <div className="service-card">
            <div className="icon-service">
              <BsDisplay />
            </div>
            <h3>Web Design</h3>
          </div>
          <div className="service-card">
            <div className="icon-service">
              <FaCogs />
            </div>
            <h3>Web Development</h3>
          </div>
          <div className="service-card">
            <div className="icon-service">
              <FaMobileAlt />
            </div>
            <h3>Responsive Design</h3>
          </div>
          <div className="service-card">
            <div className="icon-service">
              <FaMedkit />
            </div>
            <h3>Quick Support</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
