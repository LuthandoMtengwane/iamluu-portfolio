import React from "react";
import "../styles/components/about.scss";
import Luu from "../img/luuu.jpeg";
import Luu1 from "../img/luuu1.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="left-section">
          <p>
            A highly skilled Creative Developer who can <span>collaborate</span>{" "}
            with other creatives and developers to <span>create </span>projects
            of the highest quality.
          </p>
        </div>
        <div className="right-section">
          <div className="first-img">
            <img src={Luu} alt="" />
          </div>
          <div className="second-img">
            <img src={Luu1} alt="" />
          </div>
        </div>
      </div>

      <p className="description">
        Things I <span>Can</span> Help you with.{" "}
      </p>
      <h2 className="speciality">
        Web & mobile / UI&Ux / <br /> Branding / front-end <br /> Development
      </h2>
    </div>
  );
};

export default About;
