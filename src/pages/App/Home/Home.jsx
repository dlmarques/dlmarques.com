import React from "react";
import "./Home.scss";
import "animate.css";
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
  return (
    <>
      <div className="home-container">
          <h1 className="animate__animated animate__bounce">Daniel Marques</h1>

          <h3>I am into <span id="dev"><ReactTypingEffect
          speed={100}
        text={["Web Development.", "Frontend Development.", "Web Designing.", "Responsive Designing."]}
      /></span></h3>
          
      </div>
    </>
  );
};

export default Home;
