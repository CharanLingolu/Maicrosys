import React from "react";
import "./Inspire.css";

const Inspire = () => {
  return (
    <div>
      <div className="inspireContainer">
        <h1 className="Inspire">Inspire</h1>
        <div className="inspireBoxes">
          <div className="inspireBox">
            <h1>Paulson Thomas</h1>
            <p>
              A seasoned leader in technology transformation, I’ve consistently
              driven initiatives that deliver measurable impact. With 25+ years
              of experience, I specialize in leading high-performance teams,
              managing global portfolios, and fostering excellence in both large
              enterprises and startups.
            </p>
          </div>
          <div className="inspireBox">
            <h1>Rajesh Goda</h1>
            <p>
              an accomplished professional with over two decades of IT industry
              experience, ideally suited for a COO or Business Development
              Manager role within an AI and cybersecurity application and
              software company. His expertise has significantly evolved to focus
              on AI and cybersecurity, especially for the Southeast Asian
              market.
            </p>
          </div>
          <div className="inspireBox">
            <h1>Deepti Augustine</h1>
            <p>
              Senior Consultant, Infrastructure & Program Leadership Deepti
              Augustine is a seasoned technology leader with over 18 years of
              multifaceted experience in program and project management,
              infrastructure delivery, and enterprise transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspire;
