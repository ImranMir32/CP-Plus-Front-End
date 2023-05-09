import React from "react";
import "../../styles/cp-style/cp.css";
import "../../styles/cp-style/topicDetails.css";

const OperatorsExpressions = () => {
  return (
    <>
      <div className="cp-topic-details">
        <div className="details">
          <p>
            Operators and expressions are essential concepts in computer
            programming that allow developers to manipulate and combine values
            in their programs.
          </p>
          <p>
            An operator is a symbol or keyword used to perform a specific
            operation on one or more values. For example, the + operator is used
            to add two values together, and the * operator is used to multiply
            two values.
          </p>
          <p>
            An expression is a combination of one or more values, variables, and
            operators that can be evaluated to produce a result. For example,
            the expression 2 + 3 uses the + operator to add the values 2 and 3
            together, resulting in the value 5.
          </p>
          <p>
            Here are some of the most commonly used operators in programming:
          </p>

          <ul>
            <li>
              Arithmetic Operators: These operators are used to perform
              mathematical operations like addition, subtraction,
              multiplication, division, and modulus (remainder). Examples of
              arithmetic operators include +, -, *, /, and %.
            </li>
            <li>
              Float/Double: Floats and doubles are data types used to represent
              decimal numbers (i.e., numbers with a fractional component). The
              main difference between the two is the precision with which they
              can represent decimal numbers.
            </li>
            <li>
              Comparison Operators: These operators are used to compare two
              values and return a Boolean (true or false) result. Examples of
              comparison operators include == (equal to), != (not equal to),$
              {">"} (greater than), ${"<"} (less than), ${">="} (greater than or
              equal to), and ${"<="} (less than or equal to).
            </li>
            <li>
              Logical Operators: These operators are used to combine two or more
              Boolean values or expressions and return a Boolean result.
              Examples of logical operators include && (logical AND), ||
              (logical OR), and ! (logical NOT).
            </li>
            <li>
              Assignment Operators: These operators are used to assign a value
              to a variable. Examples of assignment operators include = (simple
              assignment), += (addition assignment), -= (subtraction
              assignment), *= (multiplication assignment), /= (division
              assignment), and %= (modulus assignment).
            </li>
            <li>
              Bitwise Operators: These operators are used to perform operations
              on individual bits of a binary value. Examples of bitwise
              operators include & (bitwise AND), | (bitwise OR), ^ (bitwise
              XOR), ${"<<"} (left shift), and ${">>"} (right shift).
            </li>
          </ul>
          <p>
            Expressions can be as simple as a single value, or they can be
            complex combinations of values, variables, and operators. For
            example, the expression x = 2 * (3 + y) uses the * operator to
            multiply the value 2 by the result of the expression (3 + y), and
            then assigns the result to the variable x.
          </p>

          <p>
            Overall, operators and expressions are fundamental concepts in
            programming that allow developers to manipulate and combine values
            in their programs.
          </p>

          <h3>To know more you can visit following sites :</h3>
          <div className="outsite">
            <p>Blog Links :</p>
            <a
              href="https://www.geeksforgeeks.org/operators-in-cpp/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.geeksforgeeks.org/operators-in-cpp/
            </a>
            <a
              href="https://www.programiz.com/cpp-programming/operators"
              target="_blank"
              rel="noreferrer"
            >
              https://www.programiz.com/cpp-programming/operators
            </a>

            <p>Video Links :</p>
            <a
              href="https://www.youtube.com/watch?v=JBgZxnAj4hg&t=204s"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=JBgZxnAj4hg&t=204s
            </a>
            <a
              href="https://www.youtube.com/watch?v=jNr_vCoWN0U"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=jNr_vCoWN0U
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperatorsExpressions;
