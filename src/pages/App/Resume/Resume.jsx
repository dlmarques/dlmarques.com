import React from "react";
import { ImInfinite } from "react-icons/im";
import html from "../../../assets/img/html5.png";
import jsx from "../../../assets/img/jsx.png";
import sass from "../../../assets/img/sass.png";
import git from "../../../assets/img/git.png";
import aws from "../../../assets/img/aws.png";
import js from "../../../assets/img/js.png";
import node from "../../../assets/img/nodejs.png";
import sql from "../../../assets/img/sql.png";
import mongo from "../../../assets/img/mongodb.svg";
import ts from "../../../assets/img/ts.png";
import pwa from "../../../assets/img/pwa.svg";
import jest from "../../../assets/img/jest.svg";
import vite from "../../../assets/img/vite.svg";
import tailwind from "../../../assets/img/tailwind.svg";
import { SiNextdotjs } from "react-icons/si";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume-container animate__animated animate__fadeInDownBig">
      <div className="title">
        <h1>Resume</h1>
        <span>
          <ImInfinite />
        </span>
      </div>

      <div className="resumee-container">
        <div className="experience-container">
          <div className="caption">
            <h1>Experience</h1>
            <span>
              <ImInfinite />
            </span>
          </div>
          <div className="experience-card">
            <div className="experience">
              <div className="right">
                <h3>Software Engineer</h3>
                <h4>May 2022 - Present | Devoteam </h4>
                <p>
                  React Developer, developing new features, integrating new
                  components, implementing a resilient web architecture, unit
                  testing, responsive design, develop reusable components,
                  integrate multiple components
                </p>
              </div>
            </div>
            <div className="experience">
              <div className="right">
                <h3>Software Engineer</h3>
                <h4>May 2021 - Jan 2022 | WYgroup </h4>
                <p>
                  Confidencial ongoing project, bug fixing, developed reusable
                  components, implemented a state management, integrated
                  multiple components, unit testing.
                </p>
              </div>
            </div>

            <div className="experience">
              <div className="right">
                <h3>Software Engineer</h3>
                <h4>2019 - Present | Lisbon, Portugal</h4>
                <p>
                  Design UX/UI, Developed web apps using React, Converted PSD's
                  to code, Developed API's, CI/CD, Unit Testing, Responsive
                  Design, Implemented multiple architectures
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="education-container">
          <div className="caption">
            <h1>Education</h1>
            <span>
              <ImInfinite />
            </span>
          </div>
          <div className="education-card">
            <div className="education">
              <div className="right">
                <h3>Programming Course - EQF LEVEL 4</h3>
                <h4>2016-2019 | Lisbon, Portugal</h4>
                <p>
                  600 hour internship. Computer Science Basic. Learning
                  programming logic in C. Web Development Basics. Developed a
                  final project with all of the knowledge acquired.
                </p>
              </div>
            </div>
            <div className="education">
              <div className="right">
                <h3>Computer Science - EQF level 6</h3>
                <h4>2021 - Suspended | Lisbon, Portugal</h4>
                <p>
                  This Degree aims to train specialists in the computer science,
                  information technologies, networks, and telecommunications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="title">
        <h1>Skills</h1>
        <span>
          <ImInfinite />
        </span>
      </div>
      <div className="skills-container">
        <div className="skills-card">
          <h3>Frontend</h3>
          <div className="grid one">
            <div>
              {" "}
              <img src={html} alt="html" id="html" />
              <p>HTML5</p>
            </div>
            <div>
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                alt="css"
                id="css"
              />
              <p>CSS3</p>
            </div>
            <div>
              {" "}
              <img src={sass} alt="sass" id="sass" />
              <p>SASS</p>
            </div>
            <div>
              {" "}
              <img src={tailwind} alt="tailwind" id="tailwind" />
              <p>Tailwind</p>
            </div>
            <div>
              <img src={js} alt="javascript" id="js" />
              <p>JavaScript</p>
            </div>
            <div>
              {" "}
              <img src={jsx} alt="react" id="react" />
              <p>ReactJS</p>
            </div>
            <div>
              {" "}
              <img src={ts} alt="typescript" id="ts" />
              <p>TypeScript</p>
            </div>
            <div>
              {" "}
              <SiNextdotjs style={{ fontSize: "7rem", color: "white" }} />
              <p>Next.js</p>
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h3>Backend</h3>
          <div className="grid two">
            <div>
              {" "}
              <img src={sql} alt="sql" id="sql" />
              <p>PostgreSQL</p>
            </div>
            <div>
              <img src={mongo} alt="mongodb" id="mongo" />
              <p>MongoDB</p>
            </div>
            <div>
              {" "}
              <img src={node} alt="nodejs" id="node" />
              <p>NodeJS</p>
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h3>Tools</h3>
          <div className="grid three">
            <div>
              <img src={git} alt="git" id="git" />
              <p>Git</p>
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg"
                alt=""
                id="redux"
              />
              <p>Redux</p>
            </div>
            <div>
              <img src={jest} alt="jest" />
              <p>Jest</p>
            </div>
            <div>
              <img src={vite} alt="vite" />
              <p>Vite</p>
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h3>Others</h3>
          <div className="grid three">
            <div>
              <img src={aws} alt="aws" />
              <p>AWS</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt=""
              />
              <p>SEO</p>
            </div>
            <div>
              <img
                src="https://www.gurukullinfosystems.com/asset/images/skill-4.png"
                alt="seo"
              />
              <p>UX/UI</p>
            </div>
            <div>
              <img
                src={pwa}
                alt="pwa"
                style={{ height: "65px", marginTop: "20px" }}
              />
              <p>Progressive Web App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
