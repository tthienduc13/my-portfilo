import React from "react";
import "../About/About.scss";
import "@style/_global.scss";
import { useTranslation } from "react-i18next";
function About() {
  const tech = [
    "HTML",
    "CSS",
    "SCSS",
    "Responsive",
    "Tailwindcss",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Git",
    "Figma",
  ];
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="about" id="about">
        <div className="about__container container">
          <div className="about__container-img">
            <img src={require("@img/aboutImg.jpg")} alt="profile-pic"></img>
          </div>
          <div className="about__container-content">
            <div className="about__container-content-header">
              <p>{t("about.title")}</p>
            </div>
            <div className="about__container-content-tech">
              {tech.map((item, index) => (
                <div className="tech"> {item}</div>
              ))}
            </div>
            <div className="about__container-content-desc">
              {t("about.desc")}
            </div>
            <div className="about__container-download-button">
              <a download href="">
                {t("about.button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
