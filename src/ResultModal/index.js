import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ResultModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      result: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
    this.props.handleNewQuestion();
    this.props.nextQuestion(this.props.currQuestionIdx);
  }

  render() {
    let resultText;

    if (this.props.result === 'correct') {
      resultText = <p>Correct</p>
    } else {
      resultText = <p>Incorrect</p>
    }

    return (
      <React.Fragment>
        <div>
          <Modal isOpen={this.state.open} toggle={this.toggle}
            className="result-modal">
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody className="text-center">
              {resultText}
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    )
  }
}

export default ResultModal;