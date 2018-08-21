import React, { Component } from "react";
import { addList } from "../actions/listActions";
import Form from '../components/Form';
import { connect } from "react-redux";

class AddListContainer extends Component {
  state = {
    selected: false,
    value: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.listAdded !== prevProps.listAdded && this.props.listAdded) {
      this.setState({selected: false, value: ''})
    }
  }

  addNewList = e => {
    e.preventDefault();
    this.props.addList(this.state.value);
  };

  render() {
    if (!this.state.selected) {
      return <h2 style={{paddingLeft: '6px'}} onClick={() => this.setState({selected: true})}>+ Add another list</h2>;
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

const mapStateToProps = state => ({
  listAdded: state.listReducer.listAdded
});

export default connect(mapStateToProps, { addList })(AddListContainer);
