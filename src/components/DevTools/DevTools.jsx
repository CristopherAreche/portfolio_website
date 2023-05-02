import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { devtools } from "../../utils/index";

const TechStack = () => {
  return (
    <div
      id="devtools"
      className=" p-5 experience d-flex flex-column w-100 min-vh-100 justify-content-evenly align-content-center bg-dark"
    >
      <h1 className="text-white text-center my-5">Technology Stack</h1>

      <div className="row row-cols-1 row-cols-md-3">
        {devtools.map((tools, index) => (
          <div key={index} className="col text-white">
            <h3 className="text-light my-3 text-center">{tools[0]} </h3>
            {tools.map((icon, index) => {
              if (index > 0) {
                return (
                  <div
                    key={index}
                    className="container mb-3 rounded-3 d-flex align-items-center justify-content-center gap-4 bg-black bg-opacity-50"
                    style={{ height: "4em" }}
                  >
                    <img
                      src={icon.image}
                      className="img-fluid h-75"
                      alt={icon.title}
                    />
                    <h5 className="card-title text-white">{icon.title}</h5>
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
