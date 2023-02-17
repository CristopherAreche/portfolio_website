import React, { useEffect } from "react";
import "./About.css";
import PROFILEPIC from "../images/profile-pic.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="about" className="about bg-dark w-100">
      <div className="container">
        <div className="row wrapper">
          <div
            className="about_text col-12 col-md-6 col-lg-6 px-5"
            data-aos="fade-right"
          >
            <h3>
              <span>01. </span>About me
            </h3>
            <p>
              Hello! my name is Cristopher and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2021 when I decided to try editing custom Blogger themes - turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React. Here
              are a few technologies I've been working with recently:
            </p>
            <div className="row technology">
              <div className="col-6">
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  JavaScript
                </p>
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  React JS
                </p>
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Node.JS
                </p>
              </div>
              <div className="col-6">
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  TypeScript
                </p>
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Bootstrap
                </p>
                <p>
                  <span>
                    {" "}
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Redux
                </p>
              </div>
            </div>
          </div>
          <div
            className="about_image col-12 col-md-6 col-lg-6
          d-flex justify-content-center align-items-center"
            data-aos="fade-left"
          >
            <img
              className="profile-img"
              src={PROFILEPIC}
              width={280}
              height={361}
              alt="profile_picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
