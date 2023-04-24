import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      id="home"
      className="d-flex align-content-center min-vh-100 w-100 mt-5 bg-dark"
    >
      <main className=" gap-2 d-flex flex-column  justify-content-center container p-5">
        <p className="fs-2" style={{ color: " rgb(104, 192, 92)" }}>
          Hi, my name is
        </p>
        <h1 className="text-white" style={{ fontSize: "4em" }}>
          Cristopher Areche.
        </h1>
        <h2 className="" style={{ fontSize: "50px", color: "gray" }}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 160,
              strings: ["I build things for the web.", "I am a web developer."],
            }}
          />
        </h2>
        <p className="" style={{ fontSize: "1.5em" }}>
          I'm a Front-end software engineer. I currently completed a +800-hour
          full stack development bootcamp at Henry.Currently, I'm focused on
          building accessible and useful React applications. I also have a great
          interest for the Fintech industry.
        </p>
        <div>
          <button
            style={{ border: "1px solid rgb(104, 192, 92)" }}
            className="btn btn-outline-success bg-transparent"
          >
            <a
              style={{ color: " rgb(104, 192, 92)" }}
              className="text-decoration-none"
              href="https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/"
              target="_blank"
              rel="noreferrer"
            >
              More about me
            </a>
          </button>
        </div>
      </main>
    </div>
  );
};
export default Home;
