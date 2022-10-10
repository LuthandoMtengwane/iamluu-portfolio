import React from "react";
import "../styles/components/work.scss";
import botaki from "../img/botakii.png";
import flat from "../img/flat.png";

const Work = () => {
  return (
    <div className="work">
      <h1 className="heading">
        Feat Wo<span className="work-span">r</span>k{" "}
        <span className="number">(03)</span>
      </h1>

      <div className="container">
        <div className="left-img top">
          <a
            href="https://luthandomtengwane.github.io/flat-studios/"
            target="_blank"
          >
            <img src={flat} alt="" />
          </a>
        </div>
        <div className="right-img top">
          <a
            href="https://www.behance.net/gallery/144185019/BOTAKI-WEBSITE-DESIGN"
            target="_blank"
          >
            <img src={botaki} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
