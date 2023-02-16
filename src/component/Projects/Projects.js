import "../Projects/Projects.scss";
import ProjectContent from "./ProjectContent";
import ProjectData from "../../data/ProjectData";
import Aos from "aos";
function Projects() {
  Aos.init();
  return (
    <>
      <div className="projects" id="projects">
        <div className="projects__container">
          <div className="projects__container-header">
            <p>Projects</p>
          </div>
          <div className="projects__container-content">
            {ProjectData.map((item, index) => (
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
