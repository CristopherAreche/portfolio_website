import React, { useEffect } from "react";
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
      className=" projects bg-dark min-vh-100 w-100 projects d-flex  flex-column align-items-center justify-content-center w-100 bg-dark"
    >
      <header className="title">
        <h1 className="text-white">Projects</h1>
      </header>
      <div className="container row">
        {projects.map((project) => (
          <div className="col-lg-6 text-white p-0 m-0">
            <div className="card m-3 bg-black bg-opacity-50 rounded-4">
              <div className="row g-0">
                <div className="col-md-5" style={{ height: "17em" }}>
                  <img
                    className="rounded-4 p-2 w-100 h-100"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <div
                  className="col-md-7"
                  style={{
                    height: "17em",
                  }}
                >
                  <div class="card-body h-100 d-flex flex-column justify-content-evenly">
                    <h4
                      style={{ color: "rgb(104, 192, 92)" }}
                      class="card-title"
                    >
                      {project.name}
                    </h4>
                    <p class="card-text text-white fs-8">
                      {project.description}
                    </p>
                    <div className="d-flex gap-4">
                      <button
                        style={{ border: "1px solid rgb(104, 192, 92)" }}
                        className="btn btn-outline-success bg-transparent"
                      >
                        <a
                          style={{ color: " rgb(104, 192, 92)" }}
                          className="text-decoration-none"
                          href={project.source_code}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                      </button>
                      <button
                        style={{ border: "1px solid rgb(104, 192, 92)" }}
                        className="btn btn-outline-success bg-transparent"
                      >
                        <a
                          style={{ color: " rgb(104, 192, 92)" }}
                          className="text-decoration-none"
                          href={project.deploy}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit
                        </a>
                      </button>
                    </div>
                    <div className="d-flex gap-2 flex-wrap">
                      {project.stack.map((icons) => (
                        <img
                          style={{ width: "1.5em" }}
                          src={icons}
                          alt={project}
                        />
                      ))}
                    </div>
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
