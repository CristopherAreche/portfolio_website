import React from "react";
import "./Home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home bg-dark w-100 py-1" id="home">
      <div className="icons-container">
        <ul className="icons text-white">
          <li>
            <a
              href="https://github.com/CristopherAreche"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="bi bi-github text-secondary"
                style={{ fontSize: "25px" }}
              ></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="bi bi-linkedin text-secondary"
                style={{ fontSize: "25px" }}
              ></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:cristopherareche764@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="bi bi-envelope text-secondary"
                style={{ fontSize: "25px" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="email-container">
        <p>cristopherareche764@gmail.com</p>
      </div>
      <main className="container" id="main">
        <p className="hi_name" style={{ fontSize: "1.2em" }}>
          Hi, my name is
        </p>
        <h1 className="text-white" style={{ fontSize: "4em" }}>
          Cristopher Areche.
        </h1>
        <h2>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 160,
              strings: ["I build things for the web.", "I am a web developer."],
            }}
          />
        </h2>
        <p className="detail " style={{ fontSize: "1.5em" }}>
          I'm a software engineer specializing in building (and occasionally
          designing)
          <br />
          exceptional digital experiences. Currently, I'm focused on building
          accessible,
          <br />
          human-centered products.
        </p>
        <button className="bg-transparent">
          <a
            id="LearMoreButton"
            href="https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
        </button>
      </main>
    </div>
  );
};

export default Home;
