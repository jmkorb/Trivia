import React, { useState, useEffect } from 'react';
import CategoryDropdown from './CategoryDropdown';

function Question() {
  const [questionData, setQuestionSet] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("General Knowledge");

  useEffect(() => {
    populateQuestion();
  }, [category]);

  useEffect(() => {
    let allAnswers = [];
    if (questionData && questionData.type !== 2) {
      allAnswers = [questionData.correctAnswer, ...questionData.incorrectAnswers];
      setAnswers(shuffleAnswers(allAnswers));
    }
    else{
      setAnswers(["True", "False"])
    }
  }, [questionData]);

  const shuffleAnswers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const sectionArrays = (array, size) => {
    const sectionedArray = [];
    for (let i = 0; i < array.length; i += size) {
      sectionedArray.push(array.slice(i, i + size));
    }
    return sectionedArray;
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };
  
  const questionDisplay = (questionData) => {
    return (
      <div>
          <p>{questionData.question}</p>
      </div>
    );
  }
  
  const answerDisplay = (questionData) => {    
    const answerPairs = sectionArrays(answers, 2);
  
    return (
      <div>
        {answerPairs.map((row, rowIndex) => (
          <div key={rowIndex} className="row row-cols-2 justify-content-evenly " id="answerRow">
            {row.map((answer, index) => (
              <button
                key={index}
                type="button"
                className={`btn col-4 ${selectedAnswer === answer ? (answer === questionData.correctAnswer ? 'btn-success' : 'btn-danger') : 'btn-primary'}`}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  const displayQuestion = loading
    ? <p><em>Loading...</em></p>
    : questionDisplay(questionData);  
    
  const displayAnswers = loading
    ? <p></p>
    : answerDisplay(questionData);

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

  const newQuestionButton = 
    <button id="new-question" 
      className="btn btn-secondary btn-lg col-4" 
      type="button" 
      value="Input" 
      onClick={handleButtonClick}>
        New Question
    </button>;
  
  

  return (
      <div className="container-fluid text-center">
        <h1 id="topHeader" >Trivia Time!</h1>
        <p>Let's see how well you know your {category.toLowerCase()}.</p>
        <h1>Question</h1>
        {displayQuestion}
        {displayAnswers}
        <CategoryDropdown 
          setCategory={setCategory}
        />
        {newQuestionButton}
      </div>
    );
}


export default Question;
