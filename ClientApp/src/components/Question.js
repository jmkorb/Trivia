import React, { Component } from 'react';

export class Question extends Component {
  static displayName = Question.name;

  constructor(props) {
    super(props);
    this.state = { questionSet: "", loading: true };
  }

  componentDidMount() {
    this.populateQuestion();
  }

  static renderQuestion(questionSet) {
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

  render() {
    let displayQuestion = this.state.loading
      ? <p><em>Loading...</em></p>
      : Question.renderQuestion(this.state.questionSet);

    console.log(displayQuestion);
    return (
      <div>
        <h1 id="tabelLabel" >Trivia Time!</h1>
        <p>Do you know the answer?</p>
        {displayQuestion}
      </div>
    );
  };

  async populateQuestion() {
    const response = await fetch("api/question");
    const data = await response.json();
    this.setState({ questionSet: data.results[0], loading: false });
  }
}


export default Question;
