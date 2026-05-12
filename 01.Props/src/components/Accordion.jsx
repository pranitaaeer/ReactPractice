import React, { useState } from "react";

function Accordion() {
  const [show, setShow] = useState(null);

  const reactQuestions = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library."
    },
    {
      question: "What is useState?",
      answer: "useState manages state."
    },
    {
      question: "What is JSX?",
      answer: "JSX lets us write HTML in JS."
    },
    {
      question: "What are Props?",
      answer: "Props pass data parent to child."
    },
    {
      question: "What is useEffect?",
      answer: "useEffect handles side effects."
    }
  ];

  const handleAns = (idx) => {
    if (show === idx) {
      setShow(null);
    } else {
      setShow(idx);
    }
  };

  return (
    <div>
      {reactQuestions.map((elm, idx) => (
        <div key={idx}>
          <h2>{elm.question}</h2>

          <button
            onClick={() => handleAns(idx)}
          >
            ^
          </button>

          {show === idx && (
            <p>{elm.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
