import React, { Component } from "react";
import { addItem } from "../actions/listActions";
import Form from "../components/Form";
import { connect } from "react-redux";
import styled from "styled-components";

const AddCardSelect = styled.div`
  padding: 10px;
  color: #8c8c8c;
  border-radius: 0 0 3px 3px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    background-color: #cbcdcf;
  }
`;

class AddCardContainer extends Component {
  state = {
    selected: false,
    value: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemAdded !== prevProps.itemAdded && this.props.itemAdded) {
      this.setState({selected: false, value: ''})
    }
  }

  addNewCard = e => {
    e.preventDefault();
    this.props.addItem(this.state.value, this.props.list);
  };


  render() {
    if (!this.state.selected) {
      return (
        <AddCardSelect onClick={() => this.setState({ selected: true })}>
          {this.props.list.items ? "+ Add another card" : "+ Add a card"}
        </AddCardSelect>
      );
    }
    return (
        <Form
          handleChange={e => this.setState({ value: e.target.value })}
          handleClose={() => this.setState({ selected: false })}
          handleSubmit={this.addNewCard}
          inputValue={this.state.value}
          placeholder='Enter a title for this card...'
          type='Card'
        />
    );
  }
}

const mapStateToProps = state => ({
  itemAdded: state.listReducer.itemAdded
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddCardContainer);
