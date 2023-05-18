import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/style.css";
import "../styles/challenge-style/cp.css";

// importing Challenge component
import ProblemSolving3 from "../components/Challenge-components/ProblemSolving3";
import ProblemSolving7 from "../components/Challenge-components/ProblemSolving7";
import ProblemSolving15 from "../components/Challenge-components/ProblemSolving15";
import ProblemSolving30 from "../components/Challenge-components/ProblemSolving30";
import AlgorithmChallenge3 from "../components/Challenge-components/AlgorithmChallenge3";
import AlgorithmChallenge7 from "../components/Challenge-components/AlgorithmChallenge7";
import AlgorithmChallenge15 from "../components/Challenge-components/AlgorithmChallenge15";
import AlgorithmChallenge30 from "../components/Challenge-components/AlgorithmChallenge30";

const Challenges = () => {
  const [Page, setPage] = useState("3 days Problem Solving");
  const handleButtonClick = (param) => {
    setPage(param);
  };
  return (
    <div>
      <Navbar />
      <div className="cp-container">
        <div className="cp-topic-name">
          <div className="cp-content">
            <div className="scrollable-section">
              <h3>Problem Solving Challenge</h3>
              <p
                onClick={() => {
                  handleButtonClick("3 days Problem Solving");
                }}
                className={
                  Page === "3 days Problem Solving" ? "cp-p-active" : "cp-p"
                }
              >
                3 days Problem Solving
              </p>

              <p
                onClick={() => {
                  handleButtonClick("7 days Problem Solving");
                }}
                className={
                  Page === "7 days Problem Solving" ? "cp-p-active" : "cp-p"
                }
              >
                7 days Problem Solving
              </p>

              <p
                onClick={() => {
                  handleButtonClick("15 days Problem Solving");
                }}
                className={
                  Page === "15 days Problem Solving" ? "cp-p-active" : "cp-p"
                }
              >
                15 days Problem Solving
              </p>

              <p
                onClick={() => {
                  handleButtonClick("30 days Problem Solving");
                }}
                className={
                  Page === "30 days Problem Solving" ? "cp-p-active" : "cp-p"
                }
              >
                30 days Problem Solving
              </p>

              <h3>Learn Algorithm Challenge</h3>
              <p
                onClick={() => {
                  handleButtonClick("3 days Basic Algorithm");
                }}
                className={
                  Page === "3 days Basic Algorithm" ? "cp-p-active" : "cp-p"
                }
              >
                3 days Basic Algorithm
              </p>

              <p
                onClick={() => {
                  handleButtonClick("7 days Math Algorithm");
                }}
                className={
                  Page === "7 days Math Algorithm" ? "cp-p-active" : "cp-p"
                }
              >
                7 days Math Algorithm
              </p>

              <p
                onClick={() => {
                  handleButtonClick("15 days Math and String Algorithm");
                }}
                className={
                  Page === "15 days Math and String Algorithm"
                    ? "cp-p-active"
                    : "cp-p"
                }
              >
                15 days Math and String Algorithm
              </p>

              <p
                onClick={() => {
                  handleButtonClick("30 days DSA Algorithm");
                }}
                className={
                  Page === "30 days DSA Algorithm" ? "cp-p-active" : "cp-p"
                }
              >
                30 days DSA Algorithm
              </p>
            </div>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="scrollable-section">
          <div className="cp-topic-and-ad">
            <div className="cp-topic-details">
              <h1>{Page}</h1>
              {Page === "3 days Problem Solving" && <ProblemSolving3 />}
              {Page === "7 days Problem Solving" && <ProblemSolving7 />}
              {Page === "15 days Problem Solving" && <ProblemSolving15 />}
              {Page === "30 days Problem Solving" && <ProblemSolving30 />}
              {Page === "3 days Basic Algorithm" && <AlgorithmChallenge3 />}
              {Page === "7 days Math Algorithm" && <AlgorithmChallenge7 />}
              {Page === "15 days Math and String Algorithm" && (
                <AlgorithmChallenge15 />
              )}
              {Page === "30 days DSA Algorithm" && <AlgorithmChallenge30 />}
            </div>
            <div className="ad"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Challenges;
