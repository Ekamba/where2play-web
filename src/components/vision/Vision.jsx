import React from "react";
import "./vision.scss";

const Vision = () => {
  return (
    <div className="vision__container">
      <div className="vision__text__wrapper">
        <p className="vision__text">Let's find</p>
        <span className="vision__text">some playgrounds</span>
        <p className="vision__app__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nulla
          tempora enim molestias eligendi impedit dolorem labore ratione laborum
          saepe itaque quos quibusdam provident animi facilis suscipit maiores
          eaque. Alias! Illo perferendis quis ipsa recusandae velit tempore.
          Nesciunt expedita dolore, assumenda quasi laborum fugit dignissimos
          non placeat, deleniti corrupti exercitationem sequi vel et magnam, quo
          at dolorum! Autem, quam hic. Eius mollitia dolor autem eos, neque
          adipisci laboriosam architecto accusantium, praesentium dignissimos
          aperiam saepe fugiat nostrum perspiciatis! Quisquam quas consequuntur
        </p>
        {/* <img src="/images/images.jpeg" alt="img" /> */}
      </div>
      <div className="mobile__app__container">
        <img
          src="/images/mobile-app.png"
          alt="mobile/app"
          height="500px"
          width="270px"
        />
        <div>
          <p className="mobile__app__info">Our mobile application</p>
          <div className="android__platform">
            <p>Available on :</p>
            <div className="platform">
              <img src="/images/apple_.png" className="apple" alt="apple" />
              <img src="/images/google_.png" className="google" alt="google" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
