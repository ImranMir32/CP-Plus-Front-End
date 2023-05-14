import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/style.css";
import "../styles/cp-style/cp.css";

// importing cp-guide component
import ProgrammingLanguages from "../components/Cp-components/ProgrammingLanguages";
import DataTypes from "../components/Cp-components/DataTypes";
import OperatorsExpressions from "../components/Cp-components/OperatorsExpressions";
import InputOutput from "../components/Cp-components/InputOutput";
import IfElse from "../components/Cp-components/IfElse";
import LoopInfo from "../components/Cp-components/LoopInfo";
import ArrayInfo from "../components/Cp-components/ArrayInfo";
import StringInfo from "../components/Cp-components/StringInfo";
import FunctionInfo from "../components/Cp-components/FunctionInfo";
import RecursionInfo from "../components/Cp-components/RecursionInfo";
import TimeComplexity from "../components/Cp-components/TimeComplexity";
import BitManipulation from "../components/Cp-components/BitManipulation";

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
                handleButtonClick("Operators and Expressions");
              }}
              className={
                Page === "Operators and Expressions" ? "cp-p-active" : "cp-p"
              }
            >
              Operators and Expressions
            </p>

            <p
              onClick={() => {
                handleButtonClick("Input/Output");
              }}
              className={Page === "Input/Output" ? "cp-p-active" : "cp-p"}
            >
              Input/Output
            </p>

            <p
              onClick={() => {
                handleButtonClick("If Else");
              }}
              className={Page === "If Else" ? "cp-p-active" : "cp-p"}
            >
              If Else
            </p>

            <p
              onClick={() => {
                handleButtonClick("Loops");
              }}
              className={Page === "Loops" ? "cp-p-active" : "cp-p"}
            >
              Loops
            </p>

            <p
              onClick={() => {
                handleButtonClick("Array");
              }}
              className={Page === "Array" ? "cp-p-active" : "cp-p"}
            >
              Array
            </p>

            <p
              onClick={() => {
                handleButtonClick("String");
              }}
              className={Page === "String" ? "cp-p-active" : "cp-p"}
            >
              String
            </p>

            <p
              onClick={() => {
                handleButtonClick("Function");
              }}
              className={Page === "Function" ? "cp-p-active" : "cp-p"}
            >
              Function
            </p>

            <p
              onClick={() => {
                handleButtonClick("Recursion");
              }}
              className={Page === "Recursion" ? "cp-p-active" : "cp-p"}
            >
              Recursion
            </p>

            <p
              onClick={() => {
                handleButtonClick("Time complexity and Big O notation");
              }}
              className={
                Page === "Time complexity and Big O notation"
                  ? "cp-p-active"
                  : "cp-p"
              }
            >
              Time complexity and Big O notation
            </p>

            <p
              onClick={() => {
                handleButtonClick("Bit manipulation");
              }}
              className={Page === "Bit manipulation" ? "cp-p-active" : "cp-p"}
            >
              Bit manipulation
            </p>
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
          {Page === "Operators and Expressions" && <OperatorsExpressions />}
          {Page === "If Else" && <IfElse />}
          {Page === "Input/Output" && <InputOutput />}
          {Page === "Loops" && <LoopInfo />}
          {Page === "Array" && <ArrayInfo />}
          {Page === "String" && <StringInfo />}
          {Page === "Function" && <FunctionInfo />}
          {Page === "Recursion" && <RecursionInfo />}
          {Page === "Time complexity and Big O notation" && <TimeComplexity />}
          {Page === "Bit manipulation" && <BitManipulation />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CpGuide;
