import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/style.css";
import "../styles/challenge-style/cp.css";

// importing Challenge component
import ProblemSolving3 from "../components/Challenge-components/ProblemSolving3";

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

              <h3>Leran Algorithm Challenge</h3>
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
                  handleButtonClick("15 days Algorithm");
                }}
                className={
                  Page === "15 days Algorithm" ? "cp-p-active" : "cp-p"
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
              {/* {Page === "Data Types and Variables" && <DataTypes />}
              {Page === "Operators and Expressions" && <OperatorsExpressions />}
              {Page === "If Else" && <IfElse />}
              {Page === "Input/Output" && <InputOutput />}
              {Page === "Loops" && <LoopInfo />}
              {Page === "Array" && <ArrayInfo />}
              {Page === "String" && <StringInfo />}
              {Page === "Function" && <FunctionInfo />}
              {Page === "Recursion" && <RecursionInfo />}
              {Page === "Time complexity and Big O notation" && (
                <TimeComplexity />
              )}
              {Page === "Bit manipulation" && <BitManipulation />}
            </div> */}
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
