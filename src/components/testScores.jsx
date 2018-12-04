import React, { Component } from "react";

class TestScores extends Component {
  testScoreShow(student) {
    if (student.testScore === false) return "fa fa-4x fa-plus clickable";
    return "fa fa-4x fa-minus clickable";
  }

  raiseScoreShow(student) {
    const { testScore } = this.props;
    testScore(student);
  }

  render() {
    const { student } = this.props;
    return (
      <i
        className={this.testScoreShow(student)}
        onClick={() => this.raiseScoreShow(student)}
      />
    );
  }
}

export default TestScores;
