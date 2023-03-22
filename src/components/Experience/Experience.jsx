import React from "react";
import "bootstrap/js/dist/tab";
import "./Experience.css";

const Experience = () => {
  return (
    <div
      id="experience"
      className="experience d-flex  flex-column align-items-center justify-content-center w-100 vh-100 bg-dark"
    >
      <div className="w-50 text-white">
        <h3>
          <span>02. </span>
          <span id="exp">I've worked on</span>
        </h3>
        <div className=" container d-flex mt-5 text-white">
          <div
            className="nav flex-column nav-pills me-3 border-start"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active text-start"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Company
            </button>
          </div>
          <div className="tab-content tabs_detail ms-3" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <h5>
                Frontend Developer <a href="/">@Coopinnovadores</a>
              </h5>
              <span className="date ">Freelance</span>
              <p className="details">
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Implemented a feature to download and preview PDF documents.
              </p>
              <p className="details">
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Planned the design and structure of the website with a
                responsive web-mobile version.
              </p>
              <p className="details">
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                The SCRUM workflow was used for a better distribution of the
                tasks and to be able to complete the project for the established
                delivery date.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <h5>
                Engineer <a href="/">@ Company name</a>
              </h5>
              <span className="date">Dec 2022 - Jan 2023</span>
              <p>
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Write modern, performant, maintainable code for a diverse of
                clients and internal projects
              </p>
              <p>
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Write modern, performant, maintainable code for a diverse of
                clients and internal projects
              </p>
              <p>
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Write modern, performant, maintainable code for a diverse of
                clients and internal projects
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <h5>
                Engineer <a href="/"> @ Company name</a>
              </h5>
              <span className="date">Dec 2022 - Jan 2023</span>
              <p>
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Write modern, performant, maintainable code for a diverse of
                clients and internal projects
              </p>
              <p>
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Write modern, performant, maintainable code for a diverse of
                clients and internal projects
              </p>
              <p>
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Write modern, performant, maintainable code for a diverse of
                clients and internal projects
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <h5>
                Engineer <a href="/">@ Company name</a>
              </h5>
              <span className="date">Dec 2022 - Jan 2023</span>
              <p>
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Write modern, performant, maintainable code for a diverse of
                clients and internal projects
              </p>
              <p>
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Write modern, performant, maintainable code for a diverse of
                clients and internal projects
              </p>
              <p>
                <span>
                  <i className="bi bi-arrow-right"> </i>
                </span>
                Write modern, performant, maintainable code for a diverse of
                clients and internal projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
