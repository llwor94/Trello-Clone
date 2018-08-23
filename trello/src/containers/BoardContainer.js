import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getBoardIfNeeded } from "../actions/boardActions";
import {
  clearList,
  fetchLists,
  getListsIfNeeded,
} from "../actions/listActions";
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
    this.props.getBoardIfNeeded(this.props.match.params.name);
    this.props.getListsIfNeeded();
    window.addEventListener("beforeunload", this.componentCleanUp);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.boardFetched !== prevProps.boardFetched &&
      this.props.boardFetched
    ) {
      this.props.getListsIfNeeded();
    }
  }

  componentWillUnmount() {
    this.props.clearList();
    window.removeEventListener("beforeunload", this.componentCleanUp);
  }

  componentCleanUp = () => {
    this.props.clearList();
  };

  handleChangeBoardName = () => {

  }

  render() {
    return (
      <Fragment>
        {this.props.boardFetched &&
          this.props.listsFetched && (
            <BoardWrapper>
              <BoardHeader
                changeName={this.handleChangeBoardName}
                board={this.props.board}
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
  boardFetched: state.boardReducer.fetchingCurrentBoardSuccess,
  listsFetched: state.listReducer.fetchingListsSuccess,
});

export default connect(
  mapStateToProps,
  { getBoardIfNeeded, clearList, fetchLists, getListsIfNeeded }
)(BoardContainer);
