import React, { Component } from "react";
import { addList } from "../actions/listActions";
import Form from '../components/Form';
import { connect } from "react-redux";

class AddListContainer extends Component {
  state = {
    selected: false,
    value: "",
  };

  addNewList = e => {
    e.preventDefault();
    this.props.addList(this.state.value);
  };

  render() {
    if (!this.state.selected) {
      return <h2 onClick={() => this.setState({selected: true})}>+ Add another list</h2>;
    }

    return (
        <Form
          handleChange={e => this.setState({ value: e.target.value })}
          handleClose={() => this.setState({ selected: false })}
          handleSubmit={this.addNewList}
          inputValue={this.state.value}
          placeholder='Enter list title...'
          type='List'
        />
    );
  }
}

export default connect(null, { addList })(AddListContainer);
