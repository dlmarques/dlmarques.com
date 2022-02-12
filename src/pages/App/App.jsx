import React, { useState } from "react";
import { Switch, Route, useRouteMatch, Link, NavLink } from "react-router-dom";
import { HiHome, HiTrendingUp } from "react-icons/hi";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { MdEqualizer, MdOutlineWeb, MdSchool, MdMail } from "react-icons/md";
import {
  FaUserTie,
  FaAddressBook,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import "./App.scss";
import Tooltip from "@mui/material/Tooltip";
import logo from "../../assets/img/logo2.png";
import Home from "./Home/Home";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { color, fontSize } from "@mui/system";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "../MobileMenu/MobileMenu";

const App = () => {
  let { path } = useRouteMatch();
  const [topbarOpen, setTopbarOpen] = useState(false);

  return (
    <>
      <div className="main-container">
        <div className="topbar">
          <FiMenu id="mobileMenu" onClick={() => setTopbarOpen(true)}/>
          {topbarOpen ? <MobileMenu setTopbarOpen={setTopbarOpen} topbarOpen={topbarOpen}/> : null}
          
        </div>
        <div className="sidebar">
          <img
            src={logo}
            alt=""
            className="animate__animated animate__fadeInDown"
          />

          <nav className="links">
            <Tooltip title="Home" placement="left">
            <NavLink
       className="tags"
       activeStyle={{ 
        transform: "scale(1.2)",
        transition: "all .5s ease"
        }}
       to="/"
     >
        <FaHome />
     </NavLink>
            </Tooltip>
            <Tooltip title="About" placement="left">
            <NavLink
       className="tags"
       activeStyle={{ 
         transform: "scale(1.4)",
         transition: "all .5s ease",
         
         }}
       to="/about"
     >
        <FaUserAlt />
     </NavLink>
            </Tooltip>
            <Tooltip title="Resume" placement="left">
            <NavLink
       className="tags"
       activeStyle={{ 
        transform: "scale(1.4)",
        transition: "all .5s ease"
        }}
       to="/resume"
     >
        <FaAddressBook />
     </NavLink>
            </Tooltip>
            <Tooltip title="Projects" placement="left">
            <NavLink
       className="tags"
       activeStyle={{ 
        color: "#25ca4e",
        transform: "scale(1.4)",
        transition: "all .5s ease"
        }}
       to="/projects"
     >
        <FaBriefcase />
     </NavLink>
            </Tooltip>
            <Tooltip title="Contact" placement="left">
            <NavLink
       className="tags"
       activeStyle={{ 
         transform: "scale(1.2)",
         transition: "all .5s ease"
         }}
       to="/contact"
     >
        <FaEnvelope />
     </NavLink>
            </Tooltip>
          </nav>
          {/*  <span>Copyright 2022 dlmarques</span> */}
        </div>
        <div className="content">
          <Switch>
            <Route exact path={path}>
              <Home />
            </Route>
            <Route path={`${path}about`}>
              <About />
            </Route>
            <Route path={`${path}resume`}>
              <Resume />
            </Route>
            <Route path={`${path}projects`}>
              <Projects />
            </Route>
            <Route path={`${path}contact`}>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
