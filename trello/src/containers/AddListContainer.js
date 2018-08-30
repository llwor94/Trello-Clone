import React, { Component } from 'react';
import { addList } from '../actions/listActions';
import Form from '../components/Form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import create from '../assets/create.svg';

const AddListSelect = styled.div`
  line-height: 24px;
  padding: 8px 0;
  font-weight: normal;
  color: hsla(0, 0%, 100%, 0.7);
  width: 272px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;
`;

const Img = styled.img`
  display: inline;
  height: 17px;
  padding-top: 5px;
`;

class AddListContainer extends Component {
  state = {
    selected: false,
    value: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.lists !== prevProps.lists) {
      this.setState({ selected: false, value: '' });
    }
    if (this.state.selected !== prevState.selected && this.state.selected) {
      this.divRef.focus();
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
          style={{ paddingLeft: '10px' }}
          onClick={() => this.setState({ selected: true })}
        >
          <Img src={create} /> Add another list
        </AddListSelect>
      );
    }

    return (
      <Form
        divRef={el => (this.divRef = el)}
        handleBlur={() => this.setState({ selected: false })}
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
  lists: state.listReducer.lists,
});

export default connect(
  mapStateToProps,
  { addList },
)(AddListContainer);
