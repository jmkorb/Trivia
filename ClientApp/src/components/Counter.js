import React, { Component } from 'react';

export class Counter extends Component {
    static DisplayName = "Question Test"
    state = {
        question: '',
    };

    async componentDidMount() {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=1&category=21');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const firstQuestion = data.results[0].question;
            this.setState({ question: firstQuestion });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        const { question } = this.state;

        if (!question) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1>Question</h1>
                <p>{question}</p>
            </div>
        );
    }
}
