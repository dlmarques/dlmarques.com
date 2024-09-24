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
import seo from "../../../assets/img/seo.svg";
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
                <h3>Frontend Engineer</h3>
                <h5>IT People Innovation - Millenium BCP</h5>
                <h4>Jul 2023 - Present</h4>
                <p>
                  I developed an internal React framework that would speed up
                  development across teams by baking in authentication, forms,
                  and translations as key features to keep projects consistent.
                  I built a service catalog web app that reduced the time taken
                  to set up a frontend by auto-generating boilerplate. I managed
                  projects independently, leading the planning and execution
                  with new developers through boot camps or pair programming.
                  First, underlined: robust architecture, code quality, user
                  experience. Continuously improved the framework in a number of
                  projects through code reviews, researches, and the
                  implementation of new tools.
                </p>
              </div>
            </div>
            <div className="experience">
              <div className="right">
                <h3>Frontend Engineer</h3>
                <h5>Devoteam - A-To-Be</h5>
                <h4>May 2022 - Jul 2023</h4>
                <p>
                  I redeveloped a legacy web component from React to Angular,
                  closely with another frontend developer, mostly designing
                  reusable and responsive components from given Figma designs.
                  My main emphases are optimization of the web, real-time
                  integrations of WebSocket for CCTV monitoring, and code
                  reviewing for cross-browser compatibility. I also frequently
                  presented demos to stakeholders to keep development aligned
                  with business goals and managed version control and debugging
                  to facilitate timely and smooth delivery of results.
                </p>
              </div>
            </div>
            <div className="experience">
              <div className="right">
                <h3>Software Engineer</h3>
                <h5>Freelancing</h5>
                <h4>2019 - 2022</h4>
                <p>
                  As a freelancer, I developed full-stack web applications using
                  the MERN stack, transforming PSD and Figma designs into
                  functional code. I handled code reviews, bug fixing, and
                  focused on UX/UI, web performance, and security. Additionally,
                  I implemented multiple architectures, managed databases, and
                  ensured smooth CI/CD pipelines, while thoroughly testing and
                  debugging throughout the process.
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
                <h3>Programming Course - EQF 4</h3>
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
                <h3>Computer Science - EQF 6</h3>
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
              <img src={html} alt="html" id="html" />
              <p>HTML5</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                alt="css"
                id="css"
              />
              <p>CSS3</p>
            </div>
            <div>
              <img src={sass} alt="sass" id="sass" />
              <p>SASS</p>
            </div>
            <div>
              <img src={tailwind} alt="tailwind" id="tailwind" />
              <p>Tailwind</p>
            </div>
            <div>
              <img src={js} alt="javascript" id="js" />
              <p>JavaScript</p>
            </div>
            <div>
              <img src={jsx} alt="react" id="react" />
              <p>React</p>
            </div>
            <div>
              <img src={ts} alt="typescript" id="ts" />
              <p>TypeScript</p>
            </div>
            <div>
              <SiNextdotjs style={{ fontSize: "7rem", color: "white" }} />
              <p>Next.js</p>
            </div>
          </div>
        </div>
        <div className="skills-card">
          <h3>Backend</h3>
          <div className="grid two">
            <div>
              <img src={sql} alt="sql" id="sql" />
              <p>PostgreSQL</p>
            </div>
            <div>
              <img src={mongo} alt="mongodb" id="mongo" />
              <p>MongoDB</p>
            </div>
            <div>
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
              <img src={seo} alt="seo" />
              <p>SEO</p>
            </div>
            <div>
              <img
                src="https://www.gurukullinfosystems.com/asset/images/skill-4.png"
                alt="ux/ui"
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
