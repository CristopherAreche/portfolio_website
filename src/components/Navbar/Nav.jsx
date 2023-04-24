import React from "react";
import "./Nav.css";
import "bootstrap/js/dist/collapse";
import LOGO from "../../images/logo.png";
import { PDFViewer } from "@react-pdf/renderer";
import PDF from "../PDFbutton/PDF";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark fixed-top sticky-top vw-100 px-5"
      id="navbar"
    >
      <a className="navbar-brand" href="#home">
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
            <a className="nav-link" href="#about" style={{ fontSize: "1.2em" }}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#experience"
              style={{ fontSize: "1.2em" }}
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#devtools"
              style={{ fontSize: "1.2em" }}
            >
              DevTools
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#projects"
              style={{ fontSize: "1.2em" }}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              style={{ fontSize: "1.2em" }}
            >
              Contact
            </a>
          </li>
          <li className="nav-item d-flex align-items-center ms-2">
            <a
              href="https://docs.google.com/document/d/1aoMy-M_0gYNMaORXv2QF1Lq04AE7f6FYCLSqWxXsW6s/edit"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{ fontSize: "1.2em" }}
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
  );
};

export default Nav;
