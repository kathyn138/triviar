import React from 'react';
import Quiz from '../Quiz';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.setState({
      started: true
    });
  }

  render() {
    let { questions } = this.props;

    // to handle when questions aren't yet loaded from API call
    if (!Object.keys(questions).length) {
      return "Loading...";
    }

    let defaultMessage =
      <div className="start">
        <h1>Welcome to Triviar</h1>
        <button type="button" className="btn btn-primary start-btn"
          onClick={this.handleClick}>Start</button>
      </div>;

    let startDisplay = this.state.started ? <Quiz
      questions={this.props.questions}
      currQuestionIdx={this.props.currQuestionIdx}
      addScore={this.props.addScore}
      nextQuestion={this.props.nextQuestion}
      endQuiz={this.props.endQuiz}
    /> : defaultMessage

    return (
      startDisplay
    )
  }
}

export default StartScreen;