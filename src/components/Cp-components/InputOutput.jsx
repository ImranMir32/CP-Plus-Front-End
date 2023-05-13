import React from "react";
import "../../styles/cp-style/cp.css";
import "../../styles/cp-style/topicDetails.css";

const InputOutput = () => {
  return (
    <>
      <div className="cp-topic-details">
        <div className="details">
          <p>
            In every programming language, we need to have a mechanism to read
            input data and also send the processed data that is also known as
            Output to the end-user.
          </p>

          <p>
            As you are aware, there are many input and output devices in the
            software world that programmers can use to read data from and write
            or output data to.
          </p>

          <h3>To know more you can visit following sites :</h3>
          <div className="outsite">
            <p>Blog Links :</p>
            <a
              href="https://www.geeksforgeeks.org/basic-input-output-c/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.geeksforgeeks.org/basic-input-output-c/
            </a>
            <a
              href="https://cplusplus.com/doc/tutorial/basic_io/"
              target="_blank"
              rel="noreferrer"
            >
              https://cplusplus.com/doc/tutorial/basic_io/
            </a>

            <p>Video Links :</p>
            <a
              href="https://www.youtube.com/watch?v=7dPdMtBX1d8"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=7dPdMtBX1d8
            </a>
            <a
              href="https://www.youtube.com/watch?v=1Wrc91mp980"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=1Wrc91mp980
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputOutput;
