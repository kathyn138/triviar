import React from 'react';

class EndScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.resetQuiz();
  }

  render() {
    return (
      <React.Fragment>
        <p>Your score is: {this.props.score}</p>
        <button type="button" className="btn btn-primary" id="start-btn"
          onClick={this.handleClick}>Start Over</button>
      </React.Fragment>
    );
  }
}

export default EndScreen;