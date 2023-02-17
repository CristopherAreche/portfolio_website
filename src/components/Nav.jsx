import React from "react";
import "./Nav.css";
import "bootstrap/js/dist/collapse";
import LOGO from "../images/logo.jpg";
import { PDFViewer } from "@react-pdf/renderer";
import PDF from "./PDF";

const Nav = () => {
  return (
    <div className="position-fixed w-100">
      <div className="container bg-dark">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent navbar-dark">
          <a className="navbar-brand" href="/">
            <img src={LOGO} className="logo" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#about">
                  <span>01. </span>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  <span>02. </span>
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <span>03. </span>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <span>04. </span>
                  Contact
                </a>
              </li>
              <li className="nav-item d-flex align-items-center ms-2">
                <a
                  href="https://docs.google.com/document/d/189H1D_rbVcWRgpIwkT7fvMzKLSek3vCH/edit?usp=sharing&ouid=114477179850614930278&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="bg-transparent"
                    onClick={() => {
                      <PDFViewer>
                        <PDF />
                      </PDFViewer>;
                    }}
                  >
                    Resume
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
