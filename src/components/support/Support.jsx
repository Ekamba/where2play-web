import React from "react";
import "./support.scss";
import { ImMobile } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Support = () => {
  return (
    <div className="support__container">
      <div className="title">
        <h1>Support</h1>
      </div>
      <div className="support__text__wrapper">
        <p className="support__text"> We help you with any kind of</p>
        <p className="support__text">problem accounter with our app.</p>
      </div>
      <div className="how__we__help">
        <div className="service">
          <h3>Quick service</h3>
          <p>We are here to overcome problems</p>
        </div>
        <div className="support">
          <h3>24/7 support</h3>
          <p>We are always connected</p>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p className="icons">
            <MdEmail fontSize={24} />
            <span>axelleonide@gmail.com</span>
          </p>
          <p className="icons">
            <ImMobile fontSize={24} />
            <span>+4571822908</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
