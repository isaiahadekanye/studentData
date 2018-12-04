import React, { Component } from "react";
import { getStudents } from "../apiServices/studentData";
import IndividualStudent from "./individualStudent";
import SearchBox from "./searchBox";
import TagSearch from "./tagSearch";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      searchQuery: "",
      searchTag: ""
    };
    this.allStudent = this.allStudent.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleTestScore = this.handleTestScore.bind(this);
    this.tagAdd = this.tagAdd.bind(this);
  }

  async componentDidMount() {
    const { data } = await getStudents();
    data.students.map(
      student => (
        (student.testScore = false),
        (student.tags = []),
        (student.Name = student.firstName + student.lastName)
      )
    );
    this.setState({ students: data.students });
  }

  allStudent() {
    const { students, searchQuery, searchTag } = this.state;
    let data = students;
    if (searchQuery) {
      data = data.filter(student =>
        student.Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (searchTag) {
      data = data
        .map(student => ({
          ...student,
          tags: student.tags.filter(tag =>
            tag.toLowerCase().startsWith(searchTag.toLowerCase())
          )
        }))
        .filter(student => student.tags.length > 0);
    }
    return data;
  }

  handleSearch(query) {
    this.setState({ searchQuery: query, searchTag: "" });
  }

  handleTags(tag) {
    this.setState({ searchTag: tag, searchQuery: "" });
  }

  handleTestScore(student) {
    const students = [...this.state.students];
    const index = students.indexOf(student);
    console.log(student);
    console.log(students);
    console.log(index);
    students[index] = { ...students[index] };
    students[index].testScore = !students[index].testScore;
    this.setState({ students });
  }

  tagAdd(student) {
    const students = [...this.state.students];
    const index = students.indexOf(student.key);
    students[index].tags = students[index].tags.concat(student.tag);
    this.setState({ students });
  }

  render() {
    const { searchQuery, searchTag } = this.state;

    return (
      <React.Fragment>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <TagSearch value={searchTag} onChange={this.handleTags} />
        <IndividualStudent
          student={this.allStudent()}
          testScore={this.handleTestScore}
          tagAdd={this.tagAdd}
        />
      </React.Fragment>
    );
  }
}

export default Students;
