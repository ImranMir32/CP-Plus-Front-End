import React from "react";
import "../../styles/cp-style/cp.css";
import "../../styles/cp-style/topicDetails.css";

const ProgrammingLanguages = () => {
  return (
    <>
      <div className="cp-topic-details">
        <div className="details">
          <p>
            Programming languages are a set of rules, syntax, and grammar that
            allow developers to write instructions that can be understood and
            executed by computers. Each programming language has its own syntax,
            semantics, and features that make it unique and suited for
            particular types of tasks.
          </p>
          <p>
            There are many programming languages available, and each has its own
            strengths and weaknesses. Here are a few examples of popular
            programming languages:
          </p>
          <ul>
            <li>
              C++: C++ is a low-level programming language that is used for
              developing operating systems, device drivers, and system software.
              It is known for its efficiency, performance, and control over
              system resources.
            </li>
            <li>
              Python: Python is a high-level programming language that is easy
              to learn and has a simple syntax. It is widely used for data
              analysis, artificial intelligence, and web development.
            </li>
            <li>
              Java: Java is an object-oriented programming language that is
              widely used for developing desktop, web, and mobile applications.
              It is known for its portability, scalability, and security
              features.
            </li>
            <li>
              JavaScript: JavaScript is a scripting language that is commonly
              used to create interactive web pages and dynamic user interfaces.
              It is known for its versatility, flexibility, and compatibility
              with multiple platforms.
            </li>
            <li>
              Ruby: Ruby is an object-oriented programming language that is used
              for web development, scripting, and automation. It is known for
              its expressiveness, readability, and simplicity.
            </li>
          </ul>
          <p>
            Each programming language has its own set of tools, libraries, and
            frameworks that make it easier for developers to write and maintain
            code. Learning a programming language can open up many opportunities
            for building software applications, solving complex problems, and
            creating innovative products.
          </p>

          <h3>To know more you can visit following sites :</h3>
          <div className="outsite">
            <p>Blog Links :</p>
            <a
              href="https://www.geeksforgeeks.org/introduction-to-programming-languages/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.geeksforgeeks.org/introduction-to-programming-languages/
            </a>
            <a
              href="https://www.javatpoint.com/programming-language"
              target="_blank"
              rel="noreferrer"
            >
              https://www.javatpoint.com/programming-language
            </a>

            <p>Video Links :</p>
            <a
              href="https://www.youtube.com/watch?v=2lVDktWK-pc"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=2lVDktWK-pc
            </a>
            <a
              href="https://www.youtube.com/watch?v=Dao88TjHY7A"
              target="_blank"
              rel="noreferrer"
            >
              https://www.youtube.com/watch?v=Dao88TjHY7A
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrammingLanguages;
