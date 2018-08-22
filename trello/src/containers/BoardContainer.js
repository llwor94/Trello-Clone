import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getCurrentBoard } from "../actions/boardActions";
import ListsContainer from "../containers/ListsContainer";
import BoardHeader from "../components/BoardHeader";
import styled from "styled-components";

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  margin-top: 40px;
`;

class BoardContainer extends React.Component {
  componentDidMount() {
    this.props.getCurrentBoard(this.props.match.params.name);
  }

  render() {
    return (
      <Fragment>
        {this.props.boardFetched && (
          <BoardWrapper>
            <BoardHeader board={this.props.board} />
            <ListsContainer />
          </BoardWrapper>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  board: state.boardReducer.currentBoard,
  boardFetched: state.boardReducer.fetchingCurrentBoardSuccess,
});

export default connect(
  mapStateToProps,
  { getCurrentBoard }
)(BoardContainer);
