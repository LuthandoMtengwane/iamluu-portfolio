import React from "react";
import "../styles/components/navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-links">
          <a href="/">LUTHANDO MTENGWANE</a>
        </li>
        <li className="nav-links hide">
          <a href="/">PROJECTS</a>
        </li>
        <li className="nav-links hide">
          <a href="/">SOCIALS</a>
        </li>
        <li className="nav-links">
          <a href="/">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
