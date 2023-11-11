import React, { useState, useEffect } from 'react';
import CategoryDropdown from './CategoryDropdown';

function Question() {
  const [questionSet, setQuestionSet] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("GeneralKnowledge");

  useEffect(() => {
    populateQuestion();
  }, [category]);

  useEffect(() => {
    if (questionSet) {
      const allAnswers = [questionSet.correctAnswer, ...questionSet.incorrectAnswers];
      setShuffledAnswers(shuffleAnswers(allAnswers));
    }
  }, [questionSet]);

  const shuffleAnswers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };
  
  const renderQuestion = (questionSet) => {
    //TODO: need to not shuffle if true or false
    return (
      <div>
        <h1>Question</h1>
        <p>{questionSet.question}</p>
        <div class="row row-cols-2">
            {shuffledAnswers.map((answer, index) => 
              (<div key={index}>
                <button 
                  type="button"
                  className={`btn ${selectedAnswer === answer ? (answer === questionSet.correctAnswer ? 'btn-success' : 'btn-danger') : 'btn-primary'}`}
                  onClick={() => handleAnswerClick(answer)}
                  >
                  {answer}
                </button>
              </div>))}
        </div>
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
       setSelectedAnswer(null);
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
      <div class="container text-center">
        <h1 id="topHeader" >Trivia Time! Let's see how well you know {category.toLowerCase()}.</h1>
        <button class="btn btn-secondary btn-lg" type="button" value="Input" onClick = {handleButtonClick}>New Question</button>
        {displayQuestion}
        <CategoryDropdown 
          setCategory={setCategory}
        />
      </div>
    );
}


export default Question;
