import "./styles.css";
import React from "react";
import { useState } from "react";
import Education from "./Education";
import Work from "./Work";
import Programming from "./Programming";
import Projects from "./Projects";

export default function App() {
  const [education, setEducation] = useState(true);
  const [work, setWork] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [projects, setProjects] = useState(false);

  const setAllFalse = () => {
    setEducation(false);
    setWork(false);
    setProgramming(false);
    setProjects(false);
  };

  const changeState = (function1, state1) => {
    setAllFalse();
    function1(state1);
  };

  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">KEVIN ROYER</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-item">Home</span>
            <span className="mx-4 nav-item">About Me</span>
            <span className="mx-4 nav-item">Resume</span>
            <span className="mx-4 nav-item">Testimonial</span>
            <span className="mx-4 nav-item">Contact Me</span>
          </div>
        </nav>
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I&apos;m
                <span className="name-Im-text"> Kevin Royer</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Enthusiastic Dev 😎
              </span>
              <span className="Im-text-subheading">
                Knack of building applications with front and back end
                operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire Me</button>
                <button className="btn-resume-me">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/dv5edvujb/image/upload/v1663616133/IMG_20181118_182340_mi7dcp.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about-me-section about-me-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="why-text">Why Choose Me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_mdaxtkrq.json"
                background="transparent"
                speed="1"
                style={{ width: "400px", height: "400px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex py-5 flex-column">
              <span className="some-text-about-me">
                Full stack web developer with background knowledge in .NET MVC
                and React with a knack for building secure, efficient
                applications. Strong professional willing to be an asset for an
                organization.
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are a few highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full stack web development</li>
                    <li>Interactive Front End</li>
                    <li>C# and .Net Framework</li>
                    <li>SQL and SSMS</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column">
        <span className="about-me-text">Resume</span>
        <span className="why-text">Professional Bio and Details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow flex-row">
            <div className="d-flex flex-column bg-new text-dark">
              <span className="icons-span">
                <i className="fas fa-user-graduate"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-computer"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-diagram-project"></i>
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className="resume-options-items"
                onClick={() => {
                  changeState(setEducation, true);
                }}
              >
                Education
              </span>
              <span
                className="resume-options-items"
                onClick={() => {
                  changeState(setWork, true);
                }}
              >
                Work
              </span>
              <span
                className="resume-options-items"
                onClick={() => {
                  changeState(setProgramming, true);
                }}
              >
                Programming
              </span>
              <span
                className="resume-options-items"
                onClick={() => {
                  changeState(setProjects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {work === true && <Work />}
            {programming === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
    </div>
  );
}
