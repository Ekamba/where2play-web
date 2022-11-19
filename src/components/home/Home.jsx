import React from "react";
import { About, Support, Team, Vision } from "../index";
import "./home.scss";

const Home = () => {
  return (
    <div className="home__container">
      <Vision />
      <About />
      <Team />
      <Support />
    </div>
  );
};

export default Home;
