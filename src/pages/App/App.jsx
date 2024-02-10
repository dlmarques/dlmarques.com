import React, { useState, useRef, useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  NavLink,
  useLocation,
} from "react-router-dom";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { FaAddressBook, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "./App.scss";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import Home from "./Home/Home";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "../MobileMenu/MobileMenu";

const App = () => {
  const location = useLocation();
  let { path } = useRouteMatch();
  const [topbarOpen, setTopbarOpen] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    document.getElementById("content").scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="main-container" ref={myRef}>
        <div className="topbar">
          <FiMenu id="mobileMenu" onClick={() => setTopbarOpen(true)} />
          {topbarOpen ? (
            <MobileMenu setTopbarOpen={setTopbarOpen} topbarOpen={topbarOpen} />
          ) : null}
        </div>
        <div className="sidebar">
          <Logo id="logo" fill="white" />

          <nav className="links">
            <Tooltip title="Home" placement="right">
              <NavLink
                className="tags"
                activeStyle={{
                  transform: "scale(1.2)",
                  transition: "all .5s ease",
                }}
                to="/"
              >
                <FaHome />
              </NavLink>
            </Tooltip>
            <Tooltip title="About" placement="right">
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
            <Tooltip title="Resume" placement="right">
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
            <Tooltip title="Projects" placement="right">
              <NavLink
                className="tags"
                activeStyle={{
                  color: "#25ca4e",
                  transform: "scale(1.4)",
                  transition: "all .5s ease",
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
        </div>
        <div className="content" id="content">
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
