import React from "react";
import "bootstrap/js/dist/tab";
import "./Experience.css";
import "aos/dist/aos.css";

const Experience = () => {
  return (
    <div
      id="experience"
      className="experience d-flex align-items-center justify-content-center w-100 bg-dark"
    >
      <div className="exp_container">
        <div className="row">
          {/* Education */}
          <section data-aos="zoom-in" className="col">
            <header className="title">
              <h2 className="text-white">Education</h2>
            </header>
            <div className="contents">
              <div className="box">
                <h4>Sep 2017 - May 2020</h4>
                <h4 className="text-white">
                  Associates of Computer Information Systems
                </h4>
                <p>Borough of Manhattan Community College, New York.</p>
              </div>
              <div className="box">
                <h4>Sep 2020 - May 2022</h4>
                <h3 className="text-white">
                  Bachelor of Computer Science & Security Information{" "}
                </h3>
                <p>John Jay College of Criminal Justice, New York.</p>
              </div>
              <div className="box">
                <h4>Nov 2022 - April 2023</h4>
                <h3 className="text-white">Henry Coding Bootcamp</h3>
                <p>Buenos Aires, Argentina.</p>
              </div>
            </div>
          </section>
          {/* Experience */}
          <section data-aos="zoom-in" className="col">
            <header className="title">
              <h2 className="text-white">Experience</h2>
            </header>
            <div className="contents">
              <div className="box">
                <h4>December - 2022</h4>
                <h3 className="text-white">CoopInnovadores - Landing Page</h3>
                <p>A freelance project website build for a small business. </p>
              </div>
              <div className="box">
                <h4>February - 2023</h4>
                <h3 className="text-white">Henry Coding Bootcamp</h3>
                <p>Individual Proyect at Henry Coding Bootcamp.</p>
              </div>
              <div className="box">
                <h4> April - 2023</h4>
                <h4 className="text-white">
                  CRM (Customer Relationship Management) Website
                </h4>
                <p>Final Proyect at Henry Coding Bootcamp.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
