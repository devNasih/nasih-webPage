/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./nav.css";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-scroll";

const NavBar = () => {
  const [animate, setAnimate] = useState(false);

  const handleIconClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000); 
  };

  return (
    <nav>
      <h1 style={{ color: "black" }}>Nasih Ameen K</h1>
      <ul className="nav-elements">
        <li style={{ color: "black"  }}>
          <Link to="about" smooth={true} duration={0.5}>
            About
          </Link>
        </li>
        <li style={{ color: "black" }}>
          <Link to="experience" smooth={true} duration={0.5}>
            Experience
          </Link>
        </li>
        <li style={{ color: "black" }}>
          <Link to="connections" smooth={true} duration={0.5}>
            Connections
          </Link>
        </li>
        <li style={{ color: "black" }}>
          <Link to="blog" smooth={true} duration={0.5}>
            Blog
          </Link>
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
