import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about__container">
      <h1>About</h1>
      <span className="underline"></span>
      <div className="about__application">
        Our application name's is Where2Play. The purpose of this software is to
        help people to find playground around them with more details according
        to what they are looking for.
      </div>
    </div>
  );
};

export default About;
