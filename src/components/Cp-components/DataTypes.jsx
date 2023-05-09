import React from "react";
import "../../styles/cp-style/cp.css";
import "../../styles/cp-style/topicDetails.css";

const DataTypes = () => {
  return (
    <>
      <div className="cp-topic-details">
        <div className="details">
          <p>
            In computer programming, data types refer to the kind of values that
            can be stored and manipulated by a program. A variable is a named
            storage location in a computer's memory that holds a value of a
            particular data type. Here are some of the most commonly used data
            types and variables in programming:
          </p>

          <ul>
            <li>
              Integer: An integer is a whole number that can be positive,
              negative, or zero. In most programming languages, integers are
              represented using a fixed number of bits (e.g., 32 bits) and have
              a limited range of values they can represent.
            </li>
            <li>
              Float/Double: Floats and doubles are data types used to represent
              decimal numbers (i.e., numbers with a fractional component). The
              main difference between the two is the precision with which they
              can represent decimal numbers.
            </li>
            <li>
              Boolean: A boolean data type can hold one of two values: true or
              false. Booleans are often used in conditional statements to
              determine whether a particular code block should be executed or
              not.
            </li>
            <li>
              Character: A character data type is used to represent a single
              character, such as a letter, number, or symbol. Characters are
              often represented using the ASCII or Unicode character encoding
              standards.
            </li>
            <li>
              String: A string is a sequence of characters that can be used to
              represent text or other types of data. Strings are often used to
              store user input, filenames, and other text-based data.
            </li>
          </ul>
          <p>
            Variables are used to store data of a particular data type. In
            programming, variables are declared by specifying the data type and
            name of the variable. For example, to declare an integer variable
            named "count," you might write:
          </p>

          <p className="colorfull">int count;</p>
          <p>
            After the variable is declared, you can assign a value to it using
            the assignment operator (=). For example:
          </p>
          <p className="colorfull">count = 42;</p>
          <p>
            You can also declare and assign a value to a variable in a single
            line:
          </p>
          <p className="colorfull">int count = 42;</p>
          <p>
            Overall, data types and variables are fundamental concepts in
            programming that allow developers to work with different types of
            data in their programs.
          </p>

          <h3>
            To know more about Programming languages you can visit following
            sites :
          </h3>
          <div className="outsite">
            <p>Blog Links :</p>
            <a
              href="https://www.geeksforgeeks.org/cpp-data-types/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.geeksforgeeks.org/cpp-data-types/
            </a>
            <a
              href="https://www.programiz.com/cpp-programming/data-types"
              target="_blank"
              rel="noreferrer"
            >
              https://www.programiz.com/cpp-programming/data-types
            </a>

            <p>Video Links :</p>
            <a
              href="https://www.youtube.com/watch?v=cnT1oW5_ePM"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=cnT1oW5_ePM
            </a>
            <a
              href="https://www.youtube.com/watch?v=TmsuuRwg9Hc"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=TmsuuRwg9Hc
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTypes;
