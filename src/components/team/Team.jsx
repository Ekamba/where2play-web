import React, { useState } from "react";
import "./team.scss";
import { teamData } from "./data";

const Team = () => {
  const [showIcon, setShowIcon] = useState(false);

  const handleShowIcon = () => {
    setShowIcon((prevShowIcon) => !prevShowIcon);
  };
  return (
    <div className="team__container">
      <div className="title">
        <h1>Our Team</h1>
      </div>
      <p className="team__description">
        All of the skilled engineers who are making this software a beauty.
      </p>
      <div className="team__card__grid">
        {teamData?.map(
          ({
            thumbnail,
            username,
            occupation,
            linkedin,
            github,
            website,
            linkedinIcon,
            githubIcon,
            websiteIcon,
            id,
          }) => (
            <div
              onMouseOver={handleShowIcon}
              onMouseOut={handleShowIcon}
              key={id}
              className="team__card"
            >
              {/* <div
              onMouseOver={handleShowIcon}
              onMouseOut={handleShowIcon}
              key={id}
              className={showIcon ? "team__card" : "team"}
            > */}
              <div className="team__items">
                <img src={thumbnail} alt="profile" />
                <p className="name">{username}</p>
                <p className="occupation">{occupation}</p>
              </div>
              {/* {showIcon && ( */}
              <div className="team__social__medias">
                <a
                  href={linkedin}
                  className="medias"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkedinIcon}
                </a>
                <a
                  href={github}
                  className="medias"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {githubIcon}
                </a>
                <a
                  href={website}
                  className="medias"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {websiteIcon}
                </a>
              </div>
              {/* )} */}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Team;
