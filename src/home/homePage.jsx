/* eslint-disable no-unused-vars */
import "./homePage.css";
import React, { useState } from "react";
import HomePageFirst from "./first_page";
import NavBar from "../shared/components/nav";
import About from "../home_components/about/about";
import Blog from "../home_components/blog/blog";
import Connections from "../home_components/connections/connections";
import Projects from "../home_components/projects/projects";
export default function HomePage() {
  const [selectedSection, setSelectedSection] = useState("about");
  // const renderContent = () => {
  //   switch (selectedSection) {
  //     case "about":
  //       return <About />;
  //     case "blog":
  //       return <Blog />;
  //     case "connections":
  //       return <Connections />;
  //     case "projects":
  //       return <Projects />;
  //     default:
  //       return <About />;
  //   }
  // };
  return (
    <div className="col-xl-12 col-lg-12 col-12 homePage">
      <div className=" col-xl-12 col-lg-12 col-12">
        <NavBar />
      </div>
      <HomePageFirst />
    </div>
  );
}
