import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/style.css";
import "../styles/cp-style/cp.css";

// importing cp-guide component
import ProgrammingLanguages from "../components/Cp-components/ProgrammingLanguages";
import DataTypes from "../components/Cp-components/DataTypes";
import LoopInfo from "../components/Cp-components/LoopInfo";
import ArrayInfo from "../components/Cp-components/ArrayInfo";

const CpGuide = () => {
  const [Page, setPage] = useState("Programming Languages");
  const handleButtonClick = (param) => {
    setPage(param);
  };
  return (
    <div>
      <Navbar />
      <div className="cp-container">
        <div className="cp-topic-name">
          <div className="beginner">
            <h3>Beginner section</h3>
            <p
              onClick={() => {
                handleButtonClick("Programming Languages");
              }}
              className={
                Page === "Programming Languages" ? "cp-p-active" : "cp-p"
              }
            >
              Programming Languages
            </p>
            <p
              onClick={() => {
                handleButtonClick("Data Types and Variables");
              }}
              className={
                Page === "Data Types and Variables" ? "cp-p-active" : "cp-p"
              }
            >
              Data Types and Variables
            </p>
            <p
              onClick={() => {
                handleButtonClick("Loop");
              }}
              className={Page === "Loop" ? "cp-p-active" : "cp-p"}
            >
              Loop
            </p>
            <p
              onClick={() => {
                handleButtonClick("Array");
              }}
              className={Page === "Array" ? "cp-p-active" : "cp-p"}
            >
              Array
            </p>
            {/*
            <p
              onClick={() => {
                handleButtonClick("loop");
              }}
              className="cp-p"
            >
              loop
            </p>{" "}
            <p
              onClick={() => {
                handleButtonClick("loop");
              }}
              className="cp-p"
            >
              loop
            </p>{" "}
            <p
              onClick={() => {
                handleButtonClick("loop");
              }}
              className="cp-p"
            >
              loop
            </p>{" "}
            <p
              onClick={() => {
                handleButtonClick("loop");
              }}
              className="cp-p"
            >
              loop
            </p>{" "}
            <p
              onClick={() => {
                handleButtonClick("loop");
              }}
              className="cp-p"
            >
              loop
            </p>{" "}
            <p
              onClick={() => {
                handleButtonClick("loop");
              }}
              className="cp-p"
            >
              loop
            </p>{" "}
            <p
              onClick={() => {
                handleButtonClick("loop");
              }}
              className="cp-p"
            >
              loop
            </p>{" "}
            <p
              onClick={() => {
                handleButtonClick("loop");
              }}
              className="cp-p"
            >
              loop
            </p>*/}
          </div>
          <div className="intermediate">
            <h3>Intermediate section</h3>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
          </div>
          <div className="advanced">
            <h3>Advanced section</h3>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
            <p>contant onk import</p>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="cp-topic-details">
          <h1>{Page}</h1>
          {Page === "Programming Languages" && <ProgrammingLanguages />}
          {Page === "Data Types and Variables" && <DataTypes />}
          {Page === "loop" && <LoopInfo />}
          {Page === "array" && <ArrayInfo />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CpGuide;
