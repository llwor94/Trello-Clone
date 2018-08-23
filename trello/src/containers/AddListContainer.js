import React, { Component } from "react";
import { addList } from "../actions/listActions";
import Form from "../components/Form";
import { connect } from "react-redux";
import styled from "styled-components";

const AddListSelect = styled.div`
  line-height: 24px;
  padding: 8px 0;
  font-weight: normal;
  color: hsla(0,0%,100%,.7);
  width: 272px;
  flex-shrink: 0;
  background-color: rgba(0,0,0,.12);
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;
`;

class AddListContainer extends Component {
  state = {
    selected: false,
    value: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.listAdded !== prevProps.listAdded && this.props.listAdded) {
      this.setState({ selected: false, value: "" });
    }
  }

  addNewList = e => {
    e.preventDefault();
    this.props.addList(this.state.value);
  };

  render() {
    if (!this.state.selected) {
      return (
        <AddListSelect
          style={{ paddingLeft: "6px" }}
          onClick={() => this.setState({ selected: true })}
        >
          {" "}
          &#x0002B; Add another list
        </AddListSelect>
      );
    }

    return (
      <Form
        handleChange={e => this.setState({ value: e.target.value })}
        handleClose={() => this.setState({ selected: false })}
        handleSubmit={this.addNewList}
        inputValue={this.state.value}
        placeholder="Enter list title..."
        type="List"
      />
    );
  }
}

const mapStateToProps = state => ({
  listAdded: state.listReducer.listAdded,
});

export default connect(
  mapStateToProps,
  { addList }
)(AddListContainer);
