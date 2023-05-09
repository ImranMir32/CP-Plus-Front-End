import React from "react";
import "../../styles/cp-style/cp.css";
import "../../styles/cp-style/topicDetails.css";

const IfElse = () => {
  return (
    <>
      <div className="cp-topic-details">
        <div className="details">
          <p>
            The if-else statement is a fundamental control structure in
            programming that allows the program to make decisions based on
            certain conditions. The if-else statement is used in C++ to execute
            a block of code if a certain condition is true, and another block of
            code if the condition is false.
          </p>

          <p>The basic syntax of the if-else statement in C++ is as follows:</p>

          <p className="colorfull">int count;</p>
          <p>
            if (condition){" "}
            {
              // Code to execute if the condition is true
            }{" "}
            else{" "}
            {
              // Code to execute if the condition is false
            }
          </p>

          <p>
            In this syntax, the condition is a Boolean expression that evaluates
            to either true or false. If the condition is true, then the code
            block within the if statement is executed. If the condition is
            false, then the code block within the else statement is executed.
          </p>

          <h3>To know more you can visit following sites :</h3>
          <div className="outsite">
            <p>Blog Links :</p>
            <a
              href="https://www.w3schools.com/cpp/cpp_conditions.asp"
              target="_blank"
              rel="noreferrer"
            >
              https://www.w3schools.com/cpp/cpp_conditions.asp
            </a>
            <a
              href="https://www.programiz.com/cpp-programming/if-else"
              target="_blank"
              rel="noreferrer"
            >
              https://www.programiz.com/cpp-programming/if-else
            </a>

            <p>Video Links :</p>
            <a
              href="https://www.youtube.com/watch?v=cyB3HNlQyjY"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=cyB3HNlQyjY
            </a>
            <a
              href="https://www.youtube.com/watch?v=AY96XFqb934"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=AY96XFqb934
            </a>

            <p>Problem and Solution Links :</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IfElse;
