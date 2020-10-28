import React from 'react';
import TriviaApi from './TriviaApi';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
      score: 0,
      currQuestionIdx: 0,
      complete: false,
    };
    this.addScore = this.addScore.bind(this);
    this.endQuiz = this.endQuiz.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
  }

  componentDidMount() {
    let questions = TriviaApi.getQuestions();
    this.setState({
      questions
    });
  }
// can you do componentdidupdate to check currQIdx, if it's greater then trigger end?
  nextQuestion() {
    this.setState((state) => ({
      currQuestionIdx: state.currQuestionIdx + 1
    }));
  }

  addScore() {
    this.setState((state) => ({
      score: state.score + 1
    }));
  }

  endQuiz() {
    this.setState({
      complete: true
    });
  }

  resetQuiz() {
    let questions = TriviaApi.getQuestions();
    this.setState({
      questions,
      score: 0,
      complete: false
    });
  }

  render() {
    let display = this.state.complete ? <EndScreen score={this.state.score}
      resetQuiz={this.resetQuiz} />
      : <StartScreen
        questions={this.state.questions}
        currQuestionIdx={this.state.currQuestionIdx}
        addScore={this.addScore}
        nextQuestion={this.nextQuestion}
        endQuiz={this.endQuiz}
      />


    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-8 text-center">
            {display}
          </div>
        </div>
      </div>
    );
  }
}

export default App;