import "../Projects/Projects.scss";
import ProjectContent from "./ProjectContent";
import ProjectDataJp from "../../data/projectDataJp";
import ProjectDataEn from "../../data/projectDataEn";
import { useTranslation } from "react-i18next";
import Aos from "aos";
function Projects() {
  const [t, i18n] = useTranslation("global");
  const projectData = i18n.language === "jp" ? ProjectDataJp : ProjectDataEn;
  Aos.init();
  return (
    <>
      <div className="projects" id="projects">
        <div className="projects__container">
          <div className="projects__container-header">
            <p> {t("project.title")}</p>
          </div>
          <div className="projects__container-content">
            {projectData.map((item, index) => (
              <div data-aos="fade-up">
                <ProjectContent data={item}></ProjectContent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
