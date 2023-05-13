import React from "react";
import "../../styles/cp-style/cp.css";
import "../../styles/cp-style/topicDetails.css";

const LoopInfo = () => {
  return (
    <>
      <div className="cp-topic-details">
        <div className="details">
          <p>
            In computer programming, loops are used to repeat a block of code.
          </p>
          <p>
            For example, let's say we want to show a message 100 times. Then
            instead of writing the print statement 100 times, we can use a loop.
          </p>
          <p>
            That was just a simple example; we can achieve much more efficiency
            and sophistication in our programs by making effective use of loops.
          </p>
          <p>
            There are several types of loops in programming, but the most
            commonly used are :
          </p>
          <ul>
            <li>for loop</li>
            <li>while loop</li>
            <li>do-while loop</li>
          </ul>

          <h3>To know more you can visit following sites :</h3>
          <div className="outsite">
            <p>Blog Links :</p>
            <a
              href="https://www.geeksforgeeks.org/cpp-loops/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.geeksforgeeks.org/cpp-loops/
            </a>
            <a
              href="https://www.programiz.com/cpp-programming/for-loop"
              target="_blank"
              rel="noreferrer"
            >
              https://www.programiz.com/cpp-programming/for-loop
            </a>

            <p>Video Links :</p>
            <a
              href="https://www.youtube.com/watch?v=a7dfSBrTZtE"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=a7dfSBrTZtE
            </a>
            <a
              href="https://www.youtube.com/watch?v=jdg-W5Y4TTg"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=jdg-W5Y4TTg
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoopInfo;
