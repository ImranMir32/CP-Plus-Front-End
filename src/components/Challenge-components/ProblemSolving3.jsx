import React, { useState } from "react";
import "../../styles/challenge-style/cp.css";
import "../../styles/challenge-style/topicDetails.css";

const ProblemSolving3 = () => {
  const [Page, setPage] = useState("");
  const handleClick = (param) => {
    setPage(param);
  };
  return (
    <>
      <div className="cp-topic-details">
        <div className="details">
          <button
            onClick={() => {
              if (Page === "Day 1") setPage("");
              else handleClick("Day 1");
            }}
          >
            Day 1
          </button>
          {Page === "Day 1" && (
            <div className="outsite">
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
            </div>
          )}
          {/* </div> */}
          <button
            onClick={() => {
              if (Page === "Day 2") setPage("");
              else handleClick("Day 2");
            }}
          >
            Day 2
          </button>
          {Page === "Day 2" && (
            <div className="outsite">
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
            </div>
          )}

          <button
            onClick={() => {
              if (Page === "Day 3") setPage("");
              else handleClick("Day 3");
            }}
          >
            Day 3
          </button>
          {Page === "Day 3" && (
            <div className="outsite">
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
              <p>
                Problem Link :{" "}
                <a
                  href="https://codeforces.com/problemset/problem/1426/A"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://codeforces.com/problemset/problem/1426/A
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProblemSolving3;
