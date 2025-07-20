import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div className="mainContainer1">
        <div className="textContainer1">
          <h1>Our Services</h1>
          <h2>Impactful AI Solutions for Business</h2>
        </div>
        <div className="boxContainer">
          <div className="box">
            <i class="fa-regular fa-circle-play"></i>
            <h2>Secure Business Intelligence</h2>
            <p>
              Keep your sensitive business information confidential with our
              bespoke AI solutions. Avoid the risks associated with uploading
              sensitive documents to public LLMs like ChatGPT - our secure
              solutions protect your business strategies, customer data, and
              financial insights.
            </p>
          </div>
          <div className="box">
            <i class="fa-solid fa-square-poll-horizontal"></i>
            <h2>Predictive Analytics</h2>
            <p>
              Unlock data-driven decision-making with our AI solutions. Our
              predictive analytics capabilities forecast demand and identify
              areas for improvement, enabling you to optimize resources, boost
              productivity, and stay ahead of the curve.
            </p>
          </div>
          <div className="box">
            <i class="fa-solid fa-arrow-up-right-dots"></i>
            <h2>Workflow Visualization</h2>
            <p>
              Optimize your workflows with our AI-powered process mapping
              solution. Visualize your workflows, identify bottlenecks, and
              streamline processes in real-time, enabling data-driven
              decision-making and improved efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
