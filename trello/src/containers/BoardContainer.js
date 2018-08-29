import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getBoardIfNeeded, updateBoardName, getBoardsIfNeeded } from "../actions/boardActions";
import { clearList, getListsIfNeeded,fetchAllLists } from "../actions/listActions";
import { dismountCurrentBoard } from '../actions/boardActions'
import ListsContainer from "../containers/ListsContainer";
import BoardHeader from "../components/BoardHeader";
import styled from "styled-components";

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding-top: 40px;
`;

class BoardContainer extends React.Component {
  state = {
    showingModal: false,
  };
  componentDidMount() {
    console.log('mounted');
    this.props.fetchAllLists();
    this.props.getBoardsIfNeeded();
    this.props.getBoardIfNeeded(this.props.match.params.id);
  }

  // componentWillUnmount() {
  //   this.props.dismountCurrentBoard();
  // }

  handleChangeBoardName = value => {
    this.props.updateBoardName(value);
  };

  render() {
    console.log("rendered");
    return (
      <Fragment>
        {this.props.board && (
            <BoardWrapper>
              <BoardHeader
                changeName={this.handleChangeBoardName}
                board={this.props.board.name}
              />
              <ListsContainer />
            </BoardWrapper>
          )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  board: state.boardReducer.currentBoard,
});

export default connect(
  mapStateToProps,
  { getBoardIfNeeded, clearList, updateBoardName, getListsIfNeeded, dismountCurrentBoard, getBoardsIfNeeded, fetchAllLists }
)(BoardContainer);
