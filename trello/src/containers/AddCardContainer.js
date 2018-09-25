import React, { Component } from 'react';
import { addItem } from '../actions/itemActions';
import Form from '../components/Form';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
    value: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setState({ selected: false, value: '' });
    }
    // if (this.state.selected !== prevState.selected && this.state.selected) {
    //   this.divRef.focus();
    // }
  }

  addNewCard = e => {
    e.preventDefault();
    console.log(this.props.list.name, this.state.value);
    this.props.addItem(this.props.list.id, this.state.value);
  };

  render() {
    if (!this.state.selected) {
      return (
        <AddCardSelect onClick={() => this.setState({ selected: true })}>
          {this.props.items ? '+ Add another card' : '+ Add a card'}
        </AddCardSelect>
      );
    }
    return (
      <Form
        // divRef={el => (this.divRef = el)}
        handleBlur={() => this.setState({ selected: false })}
        handleChange={e => this.setState({ value: e.target.value })}
        handleClose={() => this.setState({ selected: false })}
        handleSubmit={this.addNewCard}
        inputValue={this.state.value}
        placeholder="Enter a title for this card..."
        type="Card"
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.itemReducer.items,
});

export default connect(
  mapStateToProps,
  { addItem },
)(AddCardContainer);
