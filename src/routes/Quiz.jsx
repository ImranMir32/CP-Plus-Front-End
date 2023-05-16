import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/style.css";
import "../styles/cp-style/cp.css";

// importing cp-guide component
import ArrayQuiz from "../components/Quiz-components/ArrayQuiz";

const Quiz = () => {
  const [Page, setPage] = useState("Quiz on Array");
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
              <h3>Quiz Topic</h3>
              <p
                onClick={() => {
                  handleButtonClick("Quiz on Array");
                }}
                className={Page === "Quiz on Array" ? "cp-p-active" : "cp-p"}
              >
                Array
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on linked list");
                }}
                className={
                  Page === "Quiz on linked list" ? "cp-p-active" : "cp-p"
                }
              >
                linked list
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Stack");
                }}
                className={Page === "Quiz on Stack" ? "cp-p-active" : "cp-p"}
              >
                Stacks
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Queue");
                }}
                className={Page === "Quiz on Queue" ? "cp-p-active" : "cp-p"}
              >
                Queue
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Tree");
                }}
                className={Page === "Quiz on Tree" ? "cp-p-active" : "cp-p"}
              >
                Tree
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Heap");
                }}
                className={Page === "Quiz on Heap" ? "cp-p-active" : "cp-p"}
              >
                Heap
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Graph");
                }}
                className={Page === "Quiz on Graph" ? "cp-p-active" : "cp-p"}
              >
                Graph
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Dynamic Programming");
                }}
                className={
                  Page === "Quiz on Dynamic Programming"
                    ? "cp-p-active"
                    : "cp-p"
                }
              >
                Dynamic Programming
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Number Theory");
                }}
                className={
                  Page === "Quiz on Number Theory" ? "cp-p-active" : "cp-p"
                }
              >
                Number Theory
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Sorting Algorithms");
                }}
                className={
                  Page === "Quiz on Sorting Algorithms" ? "cp-p-active" : "cp-p"
                }
              >
                Sorting Algorithms
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Searching Algorithms");
                }}
                className={
                  Page === "Quiz on Searching Algorithms"
                    ? "cp-p-active"
                    : "cp-p"
                }
              >
                Searching Algorithms
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on String Algorithms");
                }}
                className={
                  Page === "Quiz on String Algorithms" ? "cp-p-active" : "cp-p"
                }
              >
                String Algorithms
              </p>

              <p
                onClick={() => {
                  handleButtonClick("Quiz on Geometry Algorithms");
                }}
                className={
                  Page === "Quiz on Geometry Algorithms"
                    ? "cp-p-active"
                    : "cp-p"
                }
              >
                Geometry Algorithms
              </p>
            </div>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="scrollable-section">
          <div className="cp-topic-and-ad">
            <div className="cp-topic-details">
              <h1>{Page}</h1>
              {Page === "Quiz on Array" && <ArrayQuiz />}
            </div>
            <div className="ad"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
