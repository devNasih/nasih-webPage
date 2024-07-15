import "./experience.css";

import SkillsList from "./skills_list";
export default function Experience() {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-12 ExP-container">
        <h5
          style={{
            fontFamily: "Montserrat ,sans-serif",
            color: "#555555",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Explore My
        </h5>
        <h3
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "black",
            fontWeight: "bold",
            fontSize: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Experience
        </h3>
   
        <SkillsList />
      
      </div>
    </div>
  );
}

// <div className="container-fluid">
// <div className="row">
//   <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 test">
//   <div className="col-xl-6 col-lg-3 col-md-6 col-sm-6 col-6 icon"><FaReact /> React </div>
//   <div className="col-xl-6 col-lg-3 col-md-6 col-sm-6 col-6 icon"><FaReact /> React </div>

//   </div>
//   <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 test2">
//   <div className="col-xl-6 col-lg-3 col-md-6 col-sm-6 col-6 icon"><FaReact /> React </div>
//   <div className="col-xl-6 col-lg-3 col-md-6 col-sm-6 col-6 icon"><FaReact /> React </div>
//   </div>
// </div>
// </div>
