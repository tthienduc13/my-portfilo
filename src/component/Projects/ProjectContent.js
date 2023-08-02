import React from "react";
import "../Projects/ProjectContent.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
function ProjectContent({ data }) {
  const [t, i18n] = useTranslation("global");
  AOS.init();
  return (
    <>
      <div className="project__content">
        <div className="project__content-desc">
          <div className="project-name">
            <p>{data.name}</p>
          </div>
          <div className="project-tech">
            {data.tech.map((item, index) => (
              <div className="tech">{item}</div>
            ))}
          </div>
          <div className="project-desc">{data.desc}</div>
          <div className="project-viewbtn">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <a
                class="button-text"
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                {t("project.button")}
              </a>
            </button>
          </div>
        </div>
        <a className="project__content-img" href={data.link} target="blank">
          <img src={data.imgLink} alt="project-pic"></img>
        </a>
      </div>
    </>
  );
}

export default ProjectContent;
