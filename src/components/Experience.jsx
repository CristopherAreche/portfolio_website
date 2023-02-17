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
          <span>02. </span>Where I've worked
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
            <button
              className="nav-link text-start"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Company
            </button>
            <button
              className="nav-link text-start"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Company
            </button>
            <button
              className="nav-link text-start"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
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
