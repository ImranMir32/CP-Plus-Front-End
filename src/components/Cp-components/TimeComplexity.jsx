import React from "react";
import "../../styles/cp-style/cp.css";
import "../../styles/cp-style/topicDetails.css";

const TimeComplexity = () => {
  return (
    <>
      <div className="cp-topic-details">
        <div className="details">
          <p>
            Time complexity is a measure of the amount of time it takes to run
            an algorithm as a function of the size of its input. It's a way to
            quantify how efficient an algorithm is in terms of its running time.
          </p>
          <p>
            Big O notation is a mathematical notation that represents the
            worst-case time complexity of an algorithm. It provides a way to
            describe the upper bound of the growth rate of an algorithm's
            running time in terms of its input size. In other words, it
            describes how the running time of an algorithm scales as the size of
            the input grows larger.
          </p>
          <p>
            For example, an algorithm with a time complexity of O(n) means that
            its running time grows linearly with the size of its input, while an
            algorithm with a time complexity of O(n^2) means that its running
            time grows quadratically with the size of its input.
          </p>
          <p>
            The Big O notation is commonly used in computer science to compare
            the efficiency of algorithms and to determine which one is better
            suited for a particular task. It's important to note that the Big O
            notation only describes the upper bound of an algorithm's time
            complexity, and there may be cases where the actual running time is
            much better than the worst-case scenario described by the Big O
            notation.
          </p>

          <h3>To know more you can visit following sites :</h3>
          <div className="outsite">
            <p>Blog Links :</p>
            <a
              href="https://www.geeksforgeeks.org/examples-of-big-o-analysis/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.geeksforgeeks.org/examples-of-big-o-analysis/
            </a>
            <a
              href="https://www.codingninjas.com/codestudio/library/big-o-notation-definition-and-explanation"
              target="_blank"
              rel="noreferrer"
            >
              https://www.codingninjas.com/codestudio/library/big-o-notation-definition-and-explanation
            </a>

            <p>Video Links :</p>
            <a
              href="https://www.youtube.com/watch?v=rq_rwnveh8s"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=rq_rwnveh8s
            </a>
            <a
              href="https://www.youtube.com/watch?v=vgSKOMsjLbc&t=2s"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=vgSKOMsjLbc&t=2s
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeComplexity;
