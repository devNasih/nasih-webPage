/* eslint-disable no-unused-vars */
import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="row">
      <div className="About-nasih">
        <h5
          style={{
            fontFamily: "Montserrat ,sans-serif",
            color: "#555555",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Get To Know More
        </h5>
        <h3
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "55px",
          }}
        >
          About Me
        </h3>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6  AlignImage">
            <div className="User-Image-EXP">
              <img
                className="User-Image-EXP-imag"
                src="/assets/DSC00052.JPG"
                alt="my-image"
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="col-xl-6 col-lg-6 col-md-8 col-sm-6 col-6"
                style={{
                  color: "black",
                  gap: "10px",
                  border: "3px solid black",
                  borderRadius: "10px",
                }}
              >
                Experience
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-8 col-sm-6 col-5"
                style={{
                  color: "black",
                  gap: "10px",
                  border: "3px solid black",
                  borderRadius: "10px",
                }}
              >
                Experience
              </div>
            </div>
            <div
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
              style={{
                color: "black",
                gap: "10px",
                border: "3px solid black",
                borderRadius: "10px",
              }}
            >
              Experience
            </div>
          </div>

          {/*           
          <div className="User-Image-EXP">
            <img
              className="User-Image-EXP-imag"
              src="/assets/DSC00052.JPG"
              alt="my-image"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div> */}
          {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 User-details-EXP">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"
                style={{
                  height: "10rem",
                  color: "black",
                  margin: "10px",
                  border: "3px solid black",
                  borderRadius: "10px",
                }}
              >
                Experience
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"
                style={{
                  height: "10rem",
                  color: "black",
                  margin: "10px",
                  border: "3px solid black",
                  borderRadius: "10px",
                }}
              >
                Experience
              </div>
            </div>

            <div
              className="col-xl-12"
              style={{
                height: "10rem",
                color: "black",
                margin: "10px",
                border: "3px solid black",
                borderRadius: "10px",
              }}
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
