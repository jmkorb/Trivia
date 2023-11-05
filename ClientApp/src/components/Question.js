import React, { Component } from 'react';

export class Question extends Component {
  static displayName = Question.name;

  constructor(props) {
    super(props);
    this.state = { question: "", loading: true };
  }

  componentDidMount() {
    this.populateQuestion();
  }

  static renderQuestion(question) {
    return (
      <div>
        <h1>Question</h1>
        <p>{question}</p>
      </div>
    );
  }

  render() {
    let displayQuestion = this.state.loading
      ? <p><em>Loading...</em></p>
      : Question.renderQuestion(this.state.question);

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
    this.setState({ question: data.results[0].question, loading: false });
  }
}


export default Question;
