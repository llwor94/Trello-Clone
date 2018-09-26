import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/itemActions';
import { listByItem } from '../reducers/itemReducer';
import Button from '../components/Button';
import DropDownSelect from '../components/DropDownSelect';
import styled from 'styled-components';

const Form = styled.form`
  padding: 6px 11px;
`;

class MoveModalContainer extends Component {
  state = {
    board: '',
    list: '',
    lists: [],
  };

  componentDidMount() {
    this.setState({
      board: this.props.currentBoard,
      list: this.props.allLists.find(
        list => list.id === this.props.item.list_id,
      ),
      lists: this.props.allLists.filter(
        list => list.board_id === this.props.currentBoard.id,
      ),
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.updateItem(
      this.props.item.id,
      this.state.list,
      this.state.board,
    );
  };

  handleChange = e => {
    console.log(e.target.value);
    let value = '';
    let name = e.target.value.title.toLowerCase();
    let lists = [];
    if (e.target.name === 'Board') {
      lists = this.props.allLists.filter(
        list => list.board_id === e.target.value,
      );
      value = this.props.boards.find(board => board.id === e.target.value);
    } else {
      lists = [...this.state.lists];
      value = this.state.lists.find(list => list.id === e.target.value);
    }
    console.log(name, value);
    this.setState({ [name]: value, lists: lists });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <DropDownSelect
          label="Board"
          name={this.state.board.title}
          value={this.state.board}
          handleChange={this.handleChange}
          array={this.props.boards}
        />
        <DropDownSelect
          label="List"
          name={this.state.list.title}
          value={this.state.list}
          handleChange={this.handleChange}
          array={this.state.lists}
        />
        <Button value="Move" />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  allLists: state.listReducer.allLists,
  currentBoard: state.boardReducer.currentBoard,
  boards: state.boardReducer.boards,
  item: state.itemReducer.currentItem,
});

export default connect(
  mapStateToProps,
  { updateItem },
)(MoveModalContainer);
