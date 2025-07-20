import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="Home">
        <div className="overlay">
          <h1>AI-Powered Innovation for Business Growth</h1>
          <p>
            Unlock the True Potential of AI to Drive Efficiency,
            Decision-Making, and Growth.
          </p>
          <p>
            At Maicrosys, we craft state-of-the-art AI solutions that redefine
            the way businesses function.
            <br /> Our expertise lies in streamlining operations, enhancing
            customer engagement, and unlocking new avenues for expansion.
            <br /> Partner with us to leverage AI’s full potential and propel
            your business toward unprecedented success.
          </p>
          <div class="button-wrapper">
            <a href="/">
              <button className="bussBtn">
                Schedule a Free Consultation{" "}
                <span className="arrow">&#8594;</span>
              </button>
            </a>
          </div>
          <div class="button-wrapper">
            <a href="/">
              <button className="bussBtn">
                Discover Our Solutions <span className="arrow">&#8594;</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
