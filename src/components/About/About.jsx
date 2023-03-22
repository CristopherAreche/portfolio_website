import React, { useEffect } from "react";
import "./About.css";
import PROFILEPIC from "../../images/profile-pic.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div
      id="about"
      className="about bg-dark w-100 d-flex  flex-column align-items-center justify-content-center w-100 vh-100 bg-dark"
    >
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
              on the internet. I learned web development because I wanted to
              have the ability to create useful and attractive things online. I
              love the idea of being able to bring an idea to life and share it
              with the world through the web.
            </p>
            <p>
              Additionally, I have always enjoyed the challenge of learning
              something new, and web development provides me with the
              opportunity to do so constantly. Here are a few technologies I've
              been working with recently:
            </p>
            <div className="row technology">
              <div className="col-6">
                <h4 className="text-light">Frontend Tools</h4>
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
                  HTML & CSS
                </p>
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Bootstrap CSS
                </p>
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Redux & Redux Toolkit
                </p>
              </div>
              <div className="col-6">
                <h4 className="text-light">Backend Tools</h4>
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Node JS
                </p>
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Express
                </p>
                <p>
                  <span>
                    {" "}
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Sequelize
                </p>
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Postgre SQL
                </p>
                <p>
                  <span>
                    <i className="bi bi-arrow-right"> </i>
                  </span>
                  Render
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
