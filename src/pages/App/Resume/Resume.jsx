import React from "react";
import { ImInfinite, ImCalendar } from "react-icons/im";
import { AiOutlineAim } from "react-icons/ai";
import html from "../../../assets/img/html5.png";
import jsx from "../../../assets/img/jsx.png";
import css from "../../../assets/img/css3.png";
import sass from "../../../assets/img/sass.png";
import bootstrap from "../../../assets/img/bootstrap.png";
import materialize from "../../../assets/img/materialize.svg";
import js from "../../../assets/img/js.png";
import react from "../../../assets/img/jsx.png";
import node from "../../../assets/img/nodejs.png";
import sql from "../../../assets/img/sql.png";
import mongo from "../../../assets/img/mongodb.svg";
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
              <div className="left">
                <span>
                  <AiOutlineAim />
                </span>
              </div>
              <div className="right">
                <h3>Freelancer Full-Stack</h3>
                <h4>2021 - Present | Lisbon, Portugal</h4>
                <p>
                Freelancer developing my skills and learning as much as possible about web development.
                </p>
              </div>
            </div>
            {/* <div className="experience">
              <div className="left">
                <span>
                  <AiOutlineAim />
                </span>
              </div>
              <div className="right">
                <h3>Web Design</h3>
                <h4>2018-2020 | Lisbon, Portugal</h4>
                <p>
                  Work experience is essential for getting a job. Whether it's a
                  short work placement or a longer internship, work experience
                  is always viewed favourably by employers and can help you
                  decide your future career.
                </p>
              </div>
            </div>
            <div className="experience">
              <div className="left">
                <span>
                  <AiOutlineAim />
                </span>
              </div>
              <div className="right">
                <h3>Web Design</h3>
                <h4>2018-2020 | Lisbon, Portugal</h4>
                <p>
                  Work experience is essential for getting a job. Whether it's a
                  short work placement or a longer internship, work experience
                  is always viewed favourably by employers and can help you
                  decide your future career.
                </p>
              </div>
            </div> */}
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
              <div className="left">
                <span>
                  <AiOutlineAim />
                </span>
              </div>
              <div className="right">
                <h3>Programming Course (EQF LEVEL 4)</h3>
                <h4>2016-2019 | Lisbon, Portugal</h4>
                <p>
                  600 hour internship.
                  Computer Science Basic.
                  Designing databases in SQL.
                  Learning programming logic in C.
                  Web Development Basics.
                  Developed a final project with all of the knowledge acquired.
                </p>
              </div>
            </div>
            <div className="education">
              <div className="left">
                <span>
                  <AiOutlineAim />
                </span>
              </div>
              <div className="right">
                <h3>Computer Science (EQF level 6)</h3>
                <h4>2021 - Suspended | Lisbon, Portugal</h4>
                <p>
                This Degree aims to train specialists in the computer science, information technologies, networks, and telecommunications. On successful completion of this degree a student will be able to: Develop and realize projects involving computing solutions, for local network and internet environments, corporate networks of local and extended dimension and computer security projects.
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
          <h3>HTML</h3>
          <div className="imgs">
            <img src={html} alt="" id="html" />
            <img src={jsx} alt="" id="jsx" />
          </div>
        </div>
        <div className="skills-card">
          <h3>CSS</h3>
          <div className="imgs">
            <img src={css} alt="" id="css" />
            <img src={sass} alt="" id="sass" />
            <img src={bootstrap} alt="" id="boot" />
            <img src={materialize} alt="" id="mat" />
          </div>
        </div>
        <div className="skills-card">
          <h3>JavaScript</h3>
          <div className="imgs">
            <img src={js} alt="" id="js" />
            <img src={react} alt="" id="react" />
            <img src={node} alt="" id="node" />
          </div>
        </div>
        <div className="skills-card">
          <h3>Databases</h3>
          <div className="imgs">
            <img src={sql} alt="" id="sql" />
            <img src={mongo} alt="" id="mongo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
