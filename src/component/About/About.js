import React from "react";
import "../About/About.scss";
import "@style/_global.scss";
function About() {
  const tech = [
    "HTML",
    "CSS",
    "SCSS",
    "Responsive",
    "Tailwindcss",
    "JavaScript",
    "ReactJS",
    "Git",
    "Figma",
    "Photoshop",
  ];
  return (
    <>
      <div className="about" id="about">
        <div className="about__container container">
          <div className="about__container-img">
            <img src={require("@img/aboutImg.jpg")}></img>
          </div>
          <div className="about__container-content">
            <div className="about__container-content-header">
              <p>About me</p>
            </div>
            <div className="about__container-content-tech">
              {tech.map((item, index) => (
                <div className="tech"> {item}</div>
              ))}
            </div>
            <div className="about__container-content-desc">
              Hi! My full name is Nguyen Le Thien Duc, or you can call me Davis.
              I am a student of FPT University. With a strong desire to learn
              more about programming, I am confident that I can develop my
              knowledge and abilities to successfully complete the duties
              assigned by the organization.
            </div>
            <div className="about__container-download-button">
              <a download href="">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
