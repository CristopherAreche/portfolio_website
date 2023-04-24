import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      id="contact"
      className="gap-4 p-5 w-100 min-vh-100 bg-dark d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="text-white">Contact</h1>
      <p className="detail text-center fs-3">
        I'm currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I'll try my
        best to get back to you!
      </p>
      <button
        style={{ border: "1px solid rgb(104, 192, 92)" }}
        className="btn btn-outline-success bg-transparent"
      >
        <a
          style={{ color: " rgb(104, 192, 92)" }}
          className="text-decoration-none"
          href="mailto:cristopherareche764@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email Me
        </a>
      </button>
    </div>
  );
};

export default Contact;
