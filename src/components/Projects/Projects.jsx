import React, { useEffect } from "react";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { projects } from "../../utils/index";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div
      id="projects"
      className=" projects bg-dark w-100 projects d-flex  flex-column align-items-center justify-content-center w-100 bg-dark"
    >
      <header className="title">
        <h1 className="text-white">Projects</h1>
      </header>
      <div className="project_container mt-lg-4">
        {projects.map((project) => (
          <div className="card">
            <div className="content row h-100 w-100 m-0">
              <div className="col-md-5 p-0">
                <img
                  id="project_img"
                  src={project.image}
                  className="img-fluid h-100 w-full"
                  alt={project.name}
                />
              </div>
              <div className="sub_content col-md-7">
                <div className="row">
                  <div className="col-md-12">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <button className="source_btn">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.source_code}
                      >
                        Source Code
                      </a>
                    </button>
                    <button className="visit_btn">
                      <a target="_blank" rel="noreferrer" href={project.deploy}>
                        Visit
                      </a>
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-11">
                    {project.stack.map((icon) => (
                      <img
                        id="stack"
                        style={{ height: "1.3em" }}
                        src={icon}
                        alt={project.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
