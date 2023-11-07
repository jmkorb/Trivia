import React, { useState, useEffect } from 'react';
import CategoryDropdown from './CategoryDropdown';

function Question() {
  const [questionSet, setQuestionSet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  useEffect(() => {
    populateQuestion();
  }, []);

  const renderQuestion = (questionSet) => {
    return (
      <div>
        <h1>Question</h1>
        <p>{questionSet.question}</p>
        <h2>Answer</h2>
        <p><b>{questionSet.correctAnswer}</b></p>
        <p>{questionSet.incorrectAnswers[0]}</p>
        <p>{questionSet.incorrectAnswers[1]}</p>
        <p>{questionSet.incorrectAnswers[2]}</p>
      </div>
    );
  }

  const displayQuestion = loading
    ? <p><em>Loading...</em></p>
    : renderQuestion(questionSet);

  const populateQuestion = async () => {
    try {
      const response = await fetch("api/question");
      const data = await response.json();
      setQuestionSet(data.results[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  return (
      <div>
        <h1 id="tabelLabel" >Trivia Time!</h1>
        <p>Do you know the answer?</p>
        {displayQuestion}
        <CategoryDropdown 
          setCategory={setCategory}
        />
      </div>
    );
}


export default Question;
