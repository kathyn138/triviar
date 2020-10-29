import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ResultModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
    this.props.handleNewQuestion();
    this.props.nextQuestion(this.props.currQuestionIdx);
  }

  render() {

    let resultHeader = this.props.result[0].toUpperCase()
      + this.props.result.slice(1);

    return (
      <React.Fragment>
        <div>
          <Modal isOpen={this.state.open} toggle={this.toggle}
            className="result-modal">
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody className="text-center">
              <p className={`${this.props.result}-header`}>{resultHeader}</p>
              <p>The correct answer is: {this.props.correctAnswer}</p>
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