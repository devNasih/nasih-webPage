/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./nav.css";
import { CiMenuFries } from "react-icons/ci";

const NavBar = ({ onSelect }) => {
  const [animate, setAnimate] = useState(false);

  const handleIconClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000); // Reset animation class after 1s (duration of animation)
  };
  return (
    <nav>
      <h1 style={{ color: "black" }}>Nasih Ameen K</h1>
      <ul className="nav-elements">
        <li style={{ color: "black" }} onClick={() => onSelect("about")}>
          About
        </li>
        <li style={{ color: "black" }} onClick={() => onSelect("projects")}>
          Projects
        </li>
        <li style={{ color: "black" }} onClick={() => onSelect("connections")}>
          Connections
        </li>
        <li style={{ color: "black" }} onClick={() => onSelect("blog")}>
          Blog
        </li>
      </ul>
      <CiMenuFries
        className={`menu-icon ${animate ? "animate" : ""}`}
        onClick={handleIconClick}
      />
    </nav>
  );
};

export default NavBar;
