import React from "react";
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/img/logo.svg";
import "./MobileMenu.scss";
import "animate.css";

const MobileMenu = ({ setTopbarOpen }) => {
  return (
    <>
      <div className="mobile animate__animated animate__fadeInDown ">
        <div className="icon">
          
        </div>
        <span>
          <CgClose id="close" onClick={() => setTopbarOpen(false)} />
        </span> 

        <div className="links">
          <NavLink to="/" onClick={() => setTopbarOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{
              color: "#25ca4e",
            }}
            onClick={() => setTopbarOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/resume"
            activeStyle={{
                color: "#25ca4e",
            }}
            onClick={() => setTopbarOpen(false)}
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            activeStyle={{
                color: "#25ca4e",
            }}
            onClick={() => setTopbarOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={{
                color: "#25ca4e",
            }}
            onClick={() => setTopbarOpen(false)}
          >
            Contact
          </NavLink>
        </div>
        <div className="icon">
          <Logo fill="#25ca4e" id="icon" />
        </div>
      </div>
      <div
        className="ghost-wrapper "
        onClick={() => setTopbarOpen(false)}
      ></div>
    </>
  );
};

export default MobileMenu;
