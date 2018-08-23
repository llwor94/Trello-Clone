import React from "react";
import { connect } from "react-redux";
import { fetchBoards, addBoard, getCurrentBoard } from "../actions/boardActions";
import { fetchLists } from '../actions/listActions';
import Boards from "../components/Board-Page/Boards";
import BoardCard from "../components/Board-Page/BoardCard";
import styled from "styled-components";
import Modal from "../components/Board-Page/Modal";

const BoardWrapper = styled.div`
  width: 790px;
  margin: 80px auto 40px;
`;

class HomeContainer extends React.Component {
  state = {
    showingModal: false,
    title: '',
  };

  componentDidMount() {
    this.props.fetchBoards();
  }

  componentDidUpdate(prevProps) {
    if (this.props.boards !== prevProps.boards) {
      this.setState({showingModal: false, title: ''})
    }
    if (this.props.listsFetched !== prevProps.listsFetched) {
      this.props.history.push(`/board/${this.props.currentBoard}`)
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBoard(this.state.title)
  }

  render() {
    return (
      <BoardWrapper>
        {this.props.fetchingBoards ? (
          <p> ur boards b coming </p>
        ) : (
          <Boards 
            handleRoute={id => this.props.getCurrentBoard(id)} 
            boards={this.props.boards} 
          />
        )}
        <div onClick={() => this.setState({ showingModal: true })}>
        <BoardCard
          text={"Create a new board..."}
          createNew={true}
        />
        </div>
        {this.state.showingModal && <Modal
          handleClose={() => this.setState({ showingModal: false })}
          handleChange={e => this.setState({ title: e.target.value })}
          title={this.state.title}
          handleSubmit={this.handleSubmit}
        />}
      </BoardWrapper>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boardReducer.boards,
  fetchingBoards: state.boardReducer.fetchingBoards,
  boardAdded: state.boardReducer.addingBoardSuccess,
  currentBoard: state.boardReducer.currentBoard,
  listsFetched: state.listReducer.fetchingListsSuccess
});

export default connect(
  mapStateToProps,
  { fetchBoards, addBoard, getCurrentBoard, fetchLists }
)(HomeContainer);
