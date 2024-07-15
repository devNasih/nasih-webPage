/* eslint-disable no-unused-vars */
import "./homePage.css";
import React, { useState } from "react";
import HomePageFirst from "./first_page";
import NavBar from "../shared/components/nav";
import { Element } from "react-scroll";
import About from "../home_components/about/about";
import Experience from "../home_components/experience/experience";

export default function HomePage() {
  return (
    <div className="col-xl-12 col-lg-12 col-12 homePage">
      <div className="col-xl-12 col-lg-12 col-12">
        <NavBar />
      </div>
      <HomePageFirst />
      <Element name="about">
      <About/>
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="connections">
        <div style={{ height: "500px", backgroundColor: "lightcoral" }}>
          <h2>Connections Section</h2>
        </div>
      </Element>
      <Element name="blog">
        <div style={{ height: "500px", backgroundColor: "lightyellow" }}>
          <h2>Blog Section</h2>
        </div>
      </Element>
     
    </div>
  );
}
