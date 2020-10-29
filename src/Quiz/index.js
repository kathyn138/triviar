import React from 'react';
import Question from '../Question';

class Quiz extends React.Component {
  render() {
    let { questions, currQuestionIdx } = this.props;
    return (
      <div className="quiz">
        <Question
          data={questions[currQuestionIdx]}
          currQuestionIdx={this.props.currQuestionIdx}
          addScore={this.props.addScore}
          nextQuestion={this.props.nextQuestion}
          endQuiz={this.props.endQuiz} />
      </div>
    )
  }
}

export default Quiz;