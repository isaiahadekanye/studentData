import React, { Component } from "react";
import Input from "../commonElements/input";

class TagSearch extends Component {
  formInput(event) {
    event.preventDefault();
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <form onSubmit={this.formInput}>
        <Input
          name="tag"
          placeholder="Search by tags"
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
        />
      </form>
    );
  }
}

export default TagSearch;
