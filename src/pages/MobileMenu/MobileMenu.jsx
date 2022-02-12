import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./MobileMenu.scss";
import "animate.css";
import { ImInfinite } from "react-icons/im";

const MobileMenu = ({ setTopbarOpen }) => {
  return (
    <>
      <div className="mobile animate__animated animate__fadeInLeft ">
        {/* <span>
          <AiOutlineClose id="close" onClick={() => setTopbarOpen(false)} />
        </span> */}

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
          <ImInfinite id="icon" />
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
