import React, { useEffect, useState, useContext } from "react";
import "../../styles/quiz-style/quiz.css";
import "../../styles/quiz-style/quizDetails.css";
import { GlobalStateContext } from "../../Context/Global_Context";
import { GlobalMethodsContext } from "../../Context/GlobalMethodsContext";

const ArrayQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [hideButton, sethideButton] = useState(false);
  const { user } = useContext(GlobalStateContext);
  const { updateScore } = useContext(GlobalMethodsContext);
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top of the page
  }, []);

  const questions = [
    {
      id: 1,
      question:
        "Question 1: Every element in an array is searched against some searching key, special for ?",
      options: [
        { id: 1, text: "Linear search", isCorrect: true },
        { id: 2, text: "Bubble sort", isCorrect: false },
        { id: 3, text: "All of them", isCorrect: false },
        { id: 4, text: "Binary search", isCorrect: false },
      ],
      ans: "Linear search",
    },
    {
      id: 2,
      question:
        "Question 2: A one-dimensional array contains one-dimensional arrays is called ?",
      options: [
        { id: 1, text: "Two-dimensional array", isCorrect: true },
        { id: 2, text: "Multi-casting array", isCorrect: false },
        { id: 3, text: "Multi-dimensional array", isCorrect: false },
        { id: 4, text: "Three-dimensional array", isCorrect: false },
      ],
      ans: "Two-dimensional array",
    },
    {
      id: 3,
      question:
        "Question 3: With the help of which character array can be initialized using ?",
      options: [
        { id: 1, text: "A string literal", isCorrect: true },
        { id: 2, text: "Integer values", isCorrect: false },
        { id: 3, text: "Floats value", isCorrect: false },
        { id: 4, text: "None of them", isCorrect: false },
      ],
      ans: "A string literal",
    },
    {
      id: 4,
      question:
        "Question 4:  Consecutive group of memory locations contains all same name and same type, is called as?",
      options: [
        { id: 1, text: "Structures", isCorrect: false },
        { id: 2, text: "Arrays", isCorrect: true },
        { id: 3, text: "Classes", isCorrect: false },
        { id: 4, text: "Functions", isCorrect: false },
      ],
      ans: "Arrays",
    },
    {
      id: 5,
      question:
        "Question 5: For finding value in an array which of the following technique is used?",
      options: [
        { id: 1, text: "Binary search algorithm", isCorrect: false },
        { id: 2, text: "Bubble sort", isCorrect: false },
        { id: 3, text: "Linear search algorithm", isCorrect: false },
        { id: 4, text: "All of them", isCorrect: true },
      ],
      ans: "All of them",
    },
  ];

  const handleCheckboxChange = (questionId, optionId) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = async () => {
    let totalScore = 0;
    setShowResult(true);
    questions.forEach((question) => {
      const selectedOptionId = answers[question.id];
      const selectedOption = question.options.find(
        (option) => option.id === selectedOptionId
      );

      if (selectedOption && selectedOption.isCorrect) {
        totalScore++;
      }
    });

    setScore(totalScore);
    const earn_score = user.earn_score + totalScore;
    const total_attempted_score = user.total_attempted_score + questions.length;

    const values = {
      earn_score,
      total_attempted_score,
    };
    await updateScore(values);
    window.scrollTo(0, 0);
    // const section = document.getElementById("mySection");
    // section.scrollIntoView({ behavior: "smooth" });
  };
  const handleReset = () => {
    setShowResult(false);
    setShow(true);
    sethideButton(true);
  };

  return (
    <>
      {showResult ? (
        <div className="Quiz-Result">
          <h2>Result Card :</h2>
          <p>
            Your score: {score}/{questions.length}
          </p>
          <button onClick={handleReset}>Show Answer</button>
        </div>
      ) : (
        <div className="quiz-topic-details" id="mySection">
          <div className="quiz-details">
            {questions.map((question) => (
              <div key={question.id}>
                <h3>{question.question}</h3>
                {question.options.map((option) => (
                  <div className="option" key={option.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={answers[question.id] === option.id}
                        onChange={() =>
                          handleCheckboxChange(question.id, option.id)
                        }
                      />
                      {option.text}
                    </label>
                  </div>
                ))}
                {show && <p>Answer : {question.ans}</p>}
              </div>
            ))}
          </div>
          {!hideButton && (
            <div className="quiz-outsite">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ArrayQuiz;
