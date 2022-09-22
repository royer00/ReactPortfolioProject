import React from "react";
import "./education.css";

const Education = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Centriq Training</span>
            <span className="university-degree">
              Full-stack Web Development
            </span>
          </div>
          <div>
            <span className="year-passedout">2017-2021</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
