import React, { Component } from 'react';
import { addList } from '../actions/listActions';
import Form from '../components/Form';
import { connect } from 'react-redux';
import AddList from '../components/Board/AddList';

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
    this.setState({ selected: false, value: '' });
  };

  render() {
    if (!this.state.selected) {
      return <AddList handleClick={() => this.setState({ selected: true })} />;
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
