import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Footer,
  Home,
  Navbar,
  Support,
  Team,
  Vision,
} from "./components";

const App = () => {
  return (
    <div className="app__container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
