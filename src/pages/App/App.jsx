import React, { useState, useEffect, useRef } from "react";
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
import { ReactComponent as Logo} from "../../assets/img/logo.svg";
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
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)


  useEffect(() => {
    if(!vantaEffect){
      setVantaEffect(NET({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])


  return (
    <>
      <div className="main-container" ref={myRef}>
        <div className="topbar">
          <FiMenu id="mobileMenu" onClick={() => setTopbarOpen(true)}/>
          {topbarOpen ? <MobileMenu setTopbarOpen={setTopbarOpen} topbarOpen={topbarOpen}/> : null}
          
        </div>
        <div className="sidebar">
          <Logo id="logo" fill="white"/>

          <nav className="links">
            <Tooltip title="Home" placement="left">
            <NavLink
       className="tags"
       activeStyle={{ 
        transform: "scale(1.2)",
        transition: "all .5s ease",
        }}
       to="/"
     >
        <FaHome  />
     </NavLink>
            </Tooltip>
            <Tooltip title="About" placement="left">
            <NavLink
       className="tags"
       activeStyle={{ 
         transform: "scale(1.4)",
         transition: "all .5s ease",
         color: "#25ca4e",
         
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
        transition: "all .5s ease",
        color: "#25ca4e",
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
        transition: "all .5s ease",
        color: "#25ca4e",
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
         transition: "all .5s ease",
         color: "#25ca4e",
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
