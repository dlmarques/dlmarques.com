import React from "react";
import "./Home.scss";
import "animate.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
          <h1 className="animate__animated animate__bounce">Daniel Marques</h1>

          <h3>I am a <span id="dev">Developer</span>.</h3>
      </div>
    </>
  );
};

export default Home;
