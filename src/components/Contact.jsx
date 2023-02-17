import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      id="contact"
      className="contact w-100 vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
    >
      <div className="w-50 text-center">
        <p className="what">
          <span>04. </span>What is next?
        </p>
        <h1 className="text-white">Get in Touch</h1>
        <p className="detail">
          I'm currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
        <button className="bg-transparent">
          {" "}
          <a
            href="mailto:cristopherareche764@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Say Hello!
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
