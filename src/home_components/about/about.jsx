/* eslint-disable no-unused-vars */
import React from "react";
import "./about.css";
import { FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
const About = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 About-nasih">
        <h3>About Me</h3>
        <p style={{ fontFamily: "Poppins, sans-serif" }}>
          Hello! Im Nasih Ameen, a passionate and dedicated full stack developer
          with over 2 years of hands-on experience in creating efficient,
          user-friendly websites and applications. With a strong foundation in
          both front-end and back-end development, I bring a comprehensive
          approach to every project I undertake.
        </p>
      </div>
      <h3>My Expertise</h3>
      <div className="skill-container">
        <FaReact className="react-icon-skill" />
        <IoLogoJavascript className="javascript-icon-skill" />
        <FaHtml5 className="html-icon-skill"/>
        <FaCss3 className="css-icon-skill"/>
        <FaBootstrap className="bootstrap-icon-skill"/>
        <RiFlutterFill className="flutter-icon-skill"/>
      </div>
      <div></div>
    </div>
  );
  //  <div className='main-container-about'><h1 style={{ color: 'white' }}>About Content</h1></div>;
};

export default About;
