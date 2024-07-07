/* eslint-disable no-unused-vars */
import "./menuBar.css";
import React from "react";
import Cards from "../shared/components/card";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp, FaSquareXTwitter } from "react-icons/fa6";
function MenuBar() {
  return (
    <div className="menuBar">
      <div className="personal-details-menu">
        <img
          src="src/assets/my-memoji.png"
          alt="my-image"
          width={140}
          className="memoji-image"
        />
        <h5 style={{ margin: "0", marginTop: "5px", color: "#CFCFCF" }}>
          Nasih Ameen K
        </h5>
        <div className="menuBar-position">
          <p>Software Developer</p>
        </div>
      </div>
      <Cards
        className="cards-menu-bar"
        leadingicon={<MdEmail className="menu-icon" />}
        label="Email"
        title="nasihameen902@gmail.com"
        email="nasihameen902@gmail.com"
        subject="I would like to connect with you."
      />

      <Cards
        className="cards-menu-bar"
        leadingicon={<FaLinkedin className="menu-icon" />}
        label="LinkedIn"
        title="nasih-ameen-konnola"
        href="https://www.linkedin.com/in/nasih-ameen-konnola-238a26266"
      />

      <Cards
        className="cards-menu-bar"
        leadingicon={<FaSquareWhatsapp className="menu-icon" />}
        label="Whatsapp"
        title="+91 7594996675"
        phone="7594996675"
      />
      <Cards
        className="cards-menu-bar"
        leadingicon={<FaSquareWhatsapp className="menu-icon" />}
        label="Whatsapp"
        title="+91 7594996675"
      />
      <div className="social-icons-menu">
        <a
          href="https://www.instagram.com/nas1h.ameen/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaInstagramSquare className="menu-icon-insta" />
        </a>
        <FaSquareXTwitter className="menu-icon-twitter" />
        <a
          href="https://github.com/devNasih"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FaGithub className="menu-icon-github" />
        </a>
      </div>
    </div>
  );
}

export default MenuBar;
