import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/components/header.scss";

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".header h1", {
      y: 70,
      ease: "power4.out",
      delay: 1,
      duration: 1.8,
    });
  });

  return (
    <div className="header">
      <h1 className="title">
        Creative <br />
        &nbsp;&nbsp;&nbsp;
        <span className="web">
          Web
          <br className="break" />
        </span>{" "}
        Developer
      </h1>

      <span className="free">
        Currently Available <span className="for">FOR</span>
        <br className="br" /> Freelance Worldwide
      </span>
    </div>
  );
};

export default Header;
