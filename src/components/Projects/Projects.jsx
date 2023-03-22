import React, { useEffect } from "react";
import "./Projects.css";
import PROJECT_1 from "../../images/pokemon_wp.jpeg";
import PROJECT_2 from "../../images/rickmorty_wp.webp";
import PROJECT_3 from "../../images/cooperativa.jpeg";
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
          <span>03. </span>
          <span id="myProject">My Projects</span>
        </h3>
        <div className="warning">
          <h5 className="text-danger"> WARNING:</h5>
          <p>
            <br></br>
            Please note that you may experience some bugs in some of projects as
            I continue to work on them.
            <br></br> I appreciate your patience and understanding. Thanks for
            visiting my portfolio website!
          </p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 p-5 text-center">
          <div class="col" data-aos="fade-right">
            <div class="card">
              <img
                src={PROJECT_1}
                class="card-img-top embed-responsive-item"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Pokemon Website</h5>
                <p class="card-text">
                  FullStack website build to find all your favorite pokemons and
                  create your own.
                </p>
                <button className="bg-transparent">
                  <a
                    href="https://cristopherareche.github.io/pokemon-website/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Website
                  </a>
                </button>
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
                <h5 class="card-title">Rick and Morty Website</h5>
                <p class="card-text">
                  Frontend website build to find all character from Rick and
                  Morty tv show.
                </p>
                <button className="bg-transparent">
                  <a
                    href="https://cristopherareche.github.io/rick_and_morty_website/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Website
                  </a>
                </button>
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
                  Frontend website build to help customers to register their
                  credentials into a fillable form and download it as a PDF.
                </p>
                <button className="bg-transparent">
                  {" "}
                  <a
                    href="https://github.com/CristopherAreche/Coperativa-Landing-Page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go to Website
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
