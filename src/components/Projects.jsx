import React, { useEffect } from "react";
import "./Projects.css";
import PROJECT_1 from "../images/fitness.jpeg";
import PROJECT_2 from "../images/youtube.png";
import PROJECT_3 from "../images/cooperativa.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div
      id="projects"
      className=" projects bg-dark w-100 projects d-flex  flex-column align-items-center justify-content-center w-100 vh-100 bg-dark"
    >
      <div className="container">
        <h3 className="px-5 pt-5 text-white">
          <span>03. </span>My Projects
        </h3>
        <div class="row row-cols-1 row-cols-md-3 g-4 p-5 text-center">
          <div class="col" data-aos="fade-right">
            <div class="card">
              <img
                src={PROJECT_1}
                class="card-img-top embed-responsive-item"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Fitness Website</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <button className="bg-transparent">Load More</button>
              </div>
            </div>
          </div>
          <div class="col" data-aos="zoom-in">
            <div class="card">
              <img
                src={PROJECT_2}
                class="card-img-top embed-responsive-item"
                alt="..."
              />

              <div class="card-body">
                <h5 class="card-title">Youtube Clone</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <button className="bg-transparent">Load More</button>
              </div>
            </div>
          </div>
          <div class="col" data-aos="fade-left">
            <div class="card">
              <img
                src={PROJECT_3}
                class="card-img-top embed-responsive-item"
                alt="..."
              />

              <div class="card-body">
                <h5 class="card-title">Cooperativa Website</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <button className="bg-transparent">Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
