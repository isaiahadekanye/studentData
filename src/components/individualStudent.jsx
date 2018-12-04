import React, { Component } from "react";
import TestScores from "./testScores";
import Input from "../commonElements/input";
import DisplayTag from "./displayTag";

class IndividualStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      temp: ""
    };
    this.halfwayPointForm = this.halfwayPointForm.bind(this);
    this.formInput = this.formInput.bind(this);
  }

  fullName(firstname, lastname) {
    return firstname + "  " + lastname;
  }

  average(item) {
    let sum = item.reduce((a, b) => Number(a) + Number(b), 0);
    let size = item.length;
    let average = sum / size;
    return average + "%";
  }

  testData(grade, index) {
    let testNumber = index + 1;

    return "Test" + testNumber + ": " + grade + "%";
  }
  halfwayPointForm(event) {
    this.setState({ temp: event });
  }

  formInput(event, student) {
    event.preventDefault();

    const { temp } = this.state;
    const { tagAdd } = this.props;

    let studentTag = {
      key: student,
      tag: [temp]
    };

    this.setState({ temp: "" });
    tagAdd(studentTag);
  }

  render() {
    const { student, testScore } = this.props;
    const { temp } = this.state;
    return (
      <React.Fragment>
        {student.map(student => (
          <div key={student.id}>
            <div className="row">
              <div className="col">
                <img
                  src={student.pic}
                  alt="Student"
                  className="rounded-circle border border-secondary"
                  width="200"
                  height="200"
                  border="5"
                />
              </div>
              <div className="col">
                <h1>{this.fullName(student.firstName, student.lastName)}</h1>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {this.average(student.grades)}</p>
                {student.testScore === true && (
                  <div>
                    {student.grades.map((grade, index) => (
                      <p key={index + grade}>{this.testData(grade, index)}</p>
                    ))}
                    {student.tags.length >= 1 && (
                      <DisplayTag tags={student.tags} />
                    )}
                    <form onSubmit={e => this.formInput(e, student)}>
                      <Input
                        required
                        name="new-tag"
                        placeholder="Add a tag"
                        value={temp}
                        onChange={e =>
                          this.halfwayPointForm(e.currentTarget.value)
                        }
                      />
                    </form>
                  </div>
                )}
              </div>
              <div className="col" />
              <TestScores
                student={student}
                testScore={testScore}
              />
            </div>
            <hr />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default IndividualStudent;
