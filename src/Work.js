import React from "react";
import "./work.css";

const Work = () => {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">The Peanut</span>
            <span className="year-passed">2019-2022</span>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start">
          <span className="position">Assistant General Manager</span>
          <span className="position-description">
            <ul>
              <li>Restaurant Stuff</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

export default Work;
