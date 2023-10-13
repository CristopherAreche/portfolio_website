import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { projects } from "../../utils/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div
      id="projects"
      className=" projects bg-dark min-vh-100 w-100 projects d-flex  flex-column align-items-center justify-content-center w-100 bg-dark gap-5"
    >
      <header className="title">
        <h1 className="text-white">Projects</h1>
      </header>
      <CarouselComponent projects={projects} />
    </div>
  );
};

export default Projects;
