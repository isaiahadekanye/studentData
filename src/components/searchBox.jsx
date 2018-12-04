import React, { Component } from "react";
import Input from "../commonElements/input";

class SearchBox extends Component {
  formInput(event) {
    event.preventDefault();
  }
  render() {
    const { value, onChange } = this.props;
    return (
      <form onSubmit={this.formInput}>
        <Input
          name="query"
          placeholder="Search by name"
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
        />
      </form>
    );
  }
}

export default SearchBox;
