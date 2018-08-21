import React from "react";
import { connect } from "react-redux";
import { fetchLists } from "../actions/listActions";
import { getCurrentBoard } from "../actions/boardActions";
import List from "../components/List";
import styled from "styled-components";

const BoardHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  display: inline-block;
  padding: 0 8px;
  line-height: 32px;
  margin: 8px;
  border-radius: 3px;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

class BoardContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLists(this.props.match.params.name);
    this.props.getCurrentBoard(this.props.match.params.name);
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemAdded !== prevProps.itemAdded) {
      this.props.fetchLists(this.props.match.params.name)
    }
  }

  render() {
    console.log(this.props.lists);
    return (
      <div>
        {this.props.boardFetched && (
          <BoardHeader>{this.props.board}</BoardHeader>
        )}
        <ListWrapper>
          {this.props.lists.map((list, index) => (
            <List key={index} list={list} />
          ))}
          <List list={null} />
        </ListWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.listReducer.lists,
  board: state.boardReducer.currentBoard,
  boardFetched: state.boardReducer.fetchingCurrentBoardSuccess,
  itemAdded: state.listReducer.itemAdded
});

export default connect(
  mapStateToProps,
  { fetchLists, getCurrentBoard }
)(BoardContainer);
