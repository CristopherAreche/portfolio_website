import React from "react";
import "./DevTools.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { front_icons, back_icons, collab_icons } from "../../utils/index";

const TechStack = () => {
  return (
    <div
      id="devtools"
      className="experience d-flex w-100 justify-content-center align-content-center bg-dark"
    >
      <div className="w-75 h-100 row text-white" id="container">
        <h1 className=" w-100 d-flex justify-content-center align-content-center">
          Technology Stack
        </h1>

        <div className=" w-100 d-flex gap-2 justify-content-center pt-5 pb-5">
          {/* Front end tools */}
          <div className="front_container  col-md-4 text-center">
            <h3 className="text-light">Front-end </h3>
            {front_icons.map((icon) => (
              <div className="d-flex justify-content-center align-content-center">
                <div className="card h-auto mb-2 rounded-3 bg-black bg-opacity-50">
                  <div class="row p-0 m-0">
                    <div
                      style={{ height: "3em" }}
                      class="col-md-4 d-flex align-items-center justify-content-center"
                    >
                      <img
                        src={icon.image}
                        className="img-fluid rounded-start h-100 mt-3"
                        alt={icon.title}
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title text-white">{icon.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Backend tools */}
          <div className="front_container  col-md-4 text-center">
            <h3 className="text-light">Back-end </h3>
            {back_icons.map((icon) => (
              <div className="d-flex justify-content-center align-content-center">
                <div className="card h-auto mb-2 rounded-3 bg-black bg-opacity-50">
                  <div class="row p-0 m-0">
                    <div
                      style={{ height: "3em" }}
                      class="col-md-4 d-flex align-items-center justify-content-center"
                    >
                      <img
                        src={icon.image}
                        className="img-fluid rounded-start h-100 mt-3"
                        alt={icon.title}
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title text-white">{icon.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Collaboration Tool */}
          <div className="front_container  col-md-4 text-center">
            <h3 className="text-light">Collaboration Tools </h3>
            {collab_icons.map((icon) => (
              <div className="d-flex justify-content-center align-content-center">
                <div className="card h-auto mb-2 rounded-3 bg-black bg-opacity-50">
                  <div class="row p-0 m-0">
                    <div
                      style={{ height: "3em" }}
                      class="col-md-4 d-flex align-items-center justify-content-center"
                    >
                      <img
                        src={icon.image}
                        className="img-fluid rounded-start h-100 mt-3"
                        alt={icon.title}
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title text-white">{icon.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
