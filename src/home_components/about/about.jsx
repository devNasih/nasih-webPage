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
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6  AlignImage">
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

                border: "3px solid black",
                borderRadius: "10px",
              }}
            >
              Experience
            </div>
          </div>
          {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 developer-bio">
            <p>
              I am an innovative Full Stack & Flutter Developer with 3 years of
              experience in both front-end and back-end development. I
              specialize in creating end-to-end web and mobile applications,
              leveraging technologies such as React Js, JavaScript, HTML, CSS,
              Bootstrap, Node Js, Express Js, MySQL, PostgreSQL, and MongoDB. As
              a Flutter Developer at Aifer Education, I build natively compiled
              applications for mobile, web, and desktop from a single codebase.
              My expertise includes cloud services and deployment tools like
              AWS, S3 Bucket, RDS DB Management, Elastic Beanstalk,
              CodePipeline, and Firebase for Authentication and Cloud Firestore.
              With a strong background from my internship at Edapt, I excel in
              mobile app development, debugging, and testing. Passionate about
              continuous learning, I stay updated with industry trends to
              deliver high-quality, efficient, and user-friendly solutions. My
              technical skills also include version control with Git, GitHub,
              GitLab, and tools like Postman, Figma, Riverpod, and Provider. My
              interests lie in cross-platform development, mobile app
              development, cloud computing, integrations, and AI/ML
              applications.
            </p>
          </div> */}
          <div className="developer-bio-container">
    <div className="developer-bio">
        <p>
            I am an innovative Full Stack & Flutter Developer with 3 years of
            experience in both front-end and back-end development. I
            specialize in creating end-to-end web and mobile applications,
            leveraging technologies such as React Js, JavaScript, HTML, CSS,
            Bootstrap, Node Js, Express Js, MySQL, PostgreSQL, and MongoDB. As
            a Flutter Developer at Aifer Education, I build natively compiled
            applications for mobile, web, and desktop from a single codebase.
            My expertise includes cloud services and deployment tools like
            AWS, S3 Bucket, RDS DB Management, Elastic Beanstalk,
            CodePipeline, and Firebase for Authentication and Cloud Firestore.
            With a strong background from my internship at Edapt, I excel in
            mobile app development, debugging, and testing. Passionate about
            continuous learning, I stay updated with industry trends to
            deliver high-quality, efficient, and user-friendly solutions. My
            technical skills also include version control with Git, GitHub,
            GitLab, and tools like Postman, Figma, Riverpod, and Provider. My
            interests lie in cross-platform development, mobile app
            development, cloud computing, integrations, and AI/ML
            applications.
        </p>
    </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default About;
