import React, { useEffect } from "react";
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
      className="py-5 min-vh-100 bg-dark w-100 d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row wrapper">
          <div
            className="gap-3 d-flex flex-column justify-content-evenly about_text col-12 col-md-6 col-lg-6 px-5"
            data-aos="fade-right"
          >
            <h3 className="fs-1 text-white">About me</h3>
            <p className="fs-5" style={{ color: "grey" }}>
              Hello! my name is Cristopher and I enjoy creating things that live
              on the internet. I learned web development because I wanted to
              have the ability to create useful and attractive things online. I
              love the idea of being able to bring an idea to life and share it
              with the world through the web.
              <br />
              <br />
              Additionally, I have always enjoyed the challenge of learning
              something new, and web development provides me with the
              opportunity to do so constantly. Here are a few technologies I've
              been working with recently:
            </p>
          </div>
          <div
            className=" about_image col-12 col-md-6 col-lg-6
          d-flex justify-content-center align-items-center"
            data-aos="fade-left"
          >
            <img
              className="rounded-4"
              style={{ border: "3px solid  rgb(104, 192, 92)" }}
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
