import React, { useState, useEffect } from 'react';
import CategoryDropdown from './CategoryDropdown';

function Question() {
  const [questionSet, setQuestionSet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("0");

  useEffect(() => {
    populateQuestion();
  }, []);

  const shuffleAnswers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const renderQuestion = (questionSet) => {
    const allAnswers = [questionSet.correctAnswer, ...questionSet.incorrectAnswers];
  
    //need to not shuffle if true or false
    const shuffledAnswers = shuffleAnswers(allAnswers);
    console.log(questionSet.correctAnswer);
    return (
      <div>
        <h1>Question</h1>
        <p>{questionSet.question}</p>
        <h2>Answer</h2>
        {shuffledAnswers.map((answer, index) => 
          (<p key={index}>{answer}</p>)
        )};
      </div>
    );
  };
  
  const displayQuestion = loading
    ? <p><em>Loading...</em></p>
    : renderQuestion(questionSet);

  const populateQuestion = async () => {
    setLoading(true);
    try {
      const response = await fetch("api/question?category=" + category);
      const data = await response.json();
       setQuestionSet(data.results[0]);
    } catch (error) {
      console.error("Error fetching question:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    populateQuestion();
  };

  return (
      <div>
        <h1 id="tabelLabel" >Trivia Time!</h1>
        <button onClick = {handleButtonClick}>Press Me</button>
        <p>Do you know the answer?</p>
        {displayQuestion}
        <CategoryDropdown 
          setCategory={setCategory}
        />
      </div>
    );
}


export default Question;
