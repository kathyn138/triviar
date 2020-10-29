import React from 'react';
import TriviaApi from './TriviaApi';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';
import './App.css';

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
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    let questions = TriviaApi.getQuestions();
    this.setState({
      questions
    });
  }

  nextQuestion(currQIdx) {
    if (currQIdx < 9) {
      this.setState((state) => ({
        currQuestionIdx: state.currQuestionIdx + 1
      }));
    } else {
      this.endQuiz();
    }
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
      currQuestionIdx: 0,
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
          <div className="col-8 text-center app-content">
            {display}
          </div>
        </div>
      </div>
    );
  }
}

export default App;