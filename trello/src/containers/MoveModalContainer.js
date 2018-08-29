import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem } from "../actions/itemActions";
import { listByItem } from "../reducers/itemReducer";
import { listByBoard } from '../actions/listActions';
import styled from "styled-components";

const Select = styled.select`
  border: none;
  cursor: pointer;
  height: 50px;
  left: 10px;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
`;
const Form = styled.form`
  padding: 6px 11px;
`;
const Wrapper = styled.div`
  position: relative;
  height: 52px;
  border-radius: 3px;
  font-weight: 700;
  background: #e2e4e6;
  box-shadow: 0 1px 0 0 #c4c9cc;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 4px;
  padding: 6px 8px 6px 11px;
  text-overflow: ellipsis;
`;

const Label = styled.span`
  color: #8c8c8c;
  display: block;
  font-size: 12px;
  line-height: 14px;
`;
const Display = styled.span`
  display: block;
  font-size: 18px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.input`
  background: #5aac44;
  box-shadow: 0 1px 0 #519839;
  color: #fff;
  margin: 10px 0 8px;
  padding: 8px 16px;
  border-radius: 3px;
  outline: none;
  font-weight: bold;
  border: none;

  &:hover {
    background: #519839;
  }

  &:active {
    background: #49852e;
  }
`;

class MoveModalContainer extends Component {
  state = {
    board: "",
    list: "",
    lists: []
  };

  componentDidMount() {
    this.setState({
      board: this.props.currentBoard,
      list: this.props.currentList,
      lists: this.props.allLists.filter(list => list.board === this.props.currentBoard.id)
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    this.props.updateItem(this.props.item.id, this.state.list, this.state.board)
  };

  handleChange = e => {
    let value = JSON.parse(e.target.value)
    let lists = []
    if (e.target.name === 'board') {
      lists = this.props.allLists.filter(list => list.board === value.id)
    } else {
      lists = [...this.state.lists]
    }
    console.log(value)
    this.setState({ [e.target.name]: value, lists: lists });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Wrapper>
          <Label>Board</Label>
          <Display>{this.state.board.name}</Display>
          <Select
            value={this.state.board}
            onChange={this.handleChange}
            name="board"
          >
            <optgroup label="boards">
              {this.props.boards.map(board => {
                return (
                  <option value={JSON.stringify(board)}>{board.name}</option>
                );
              })}
            </optgroup>
          </Select>
        </Wrapper>
        <Wrapper>
          <Label>List</Label>
          <Display>{this.state.list.name}</Display>
          <Select
            value={this.state.list}
            onChange={this.handleChange}
            name="list"
          >
            <optgroup label="lists">
              {this.state.lists.map(list => {
                return (
                  <option value={JSON.stringify(list)}>{list.name}</option>
                );
              })}
            </optgroup>
          </Select>
        </Wrapper>
        <Button type="submit" value="Move" />
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  allLists: state.listReducer.allLists,
  currentBoard: state.boardReducer.currentBoard,
  boards: state.boardReducer.boards,
  item: state.itemReducer.currentItem,
  currentList: listByItem(state, state.itemReducer.currentItem),
});

export default connect(
  mapStateToProps,
  { updateItem }
)(MoveModalContainer);
