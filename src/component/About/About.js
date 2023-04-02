import React from "react";
import "../About/About.scss";
function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__container-img">
            <img src={require("../../assets/aboutImg.jpg")}></img>
          </div>
          <div className="about__container-content">
            <div className="about__container-content-header">
              <p>About me</p>
            </div>
            <div className="about__container-content-tech">
              <div className="tech">HTML</div>
              <div className="tech">CSS</div>
              <div className="tech">SCSS</div>
              <div className="tech">Responsive</div>
              <div className="tech">Tailwindcss</div>
              <div className="tech">JavaScript</div>
              <div className="tech">ReactJS</div>
              <div className="tech">Git</div>
              <div className="tech">Figma</div>
              <div className="tech">Photoshop</div>
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
