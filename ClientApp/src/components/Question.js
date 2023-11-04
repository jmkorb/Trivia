import React, { Component, useEffect, useState } from 'react';

function Question() {

    function App() {
        const [question, setQuestion] = useState('');
      
        useEffect(() => {
          // Define the API URL (change this to match your actual API endpoint)
          const apiUrl = '/api/Question';
      
          // Make an HTTP GET request to the API
          fetch(apiUrl)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              setQuestion(data.question);
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        }, []);
      
        return (
          <div>
            <h1>Question</h1>
            <p>{question}</p>
          </div>
        );
    }
}

export default Question;
