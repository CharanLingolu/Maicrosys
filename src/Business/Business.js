import React from "react";
import "./Business.css";

const Business = () => {
  return (
    <div>
      <div className="mainContainer2">
        <div className="miniContainer1">
          <h1>Manage Business process Seamlessly</h1>
          <p>
            Transform your business with AI-driven process optimization. Across
            functions like operations, finance, marketing, and more, our AI
            expertise helps you increase efficiency, cut costs, and make
            informed decisions.
          </p>
        </div>
        <div className="miniContainer2">
          <img src="/Ai.png" alt="Ai" />
        </div>
      </div>
      <div className="miniContainer3">
        <h1>Ready to Elevate your business?</h1>
        <a href="/">
          <button>Get in Touch</button>
        </a>
      </div>
    </div>
  );
};

export default Business;
