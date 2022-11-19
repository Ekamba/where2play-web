import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_navbar.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navScrolled = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", navScrolled);

  return (
    <div
      className={
        nav ? "navbar__container navbar__scrolled" : "navbar__container"
      }
    >
      <Link className="logo" to="/">
        Where<span className="number">2</span>Play
      </Link>
      <div className={nav ? "links links__navbar__scrolled" : "links"}>
        <Link to="/">Home</Link>
        <Link to="/vision">Vision</Link>
        <Link to="about">About</Link>
        <Link to="team">Team</Link>
        <Link to="support">Support</Link>
      </div>
    </div>
  );
};

export default Navbar;
