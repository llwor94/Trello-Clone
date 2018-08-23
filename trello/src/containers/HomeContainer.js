import React from "react";
import { connect } from "react-redux";
import { fetchBoards, addBoard, getCurrentBoard } from "../actions/boardActions";
import { fetchLists } from '../actions/listActions';
import Boards from "../components/Boards";
import BoardCard from "../components/BoardCard";
import styled from "styled-components";
import Modal from "../components/Modal";

const BoardWrapper = styled.div`
  width: 790px;
  margin: 80px auto 40px;
`;

class HomeContainer extends React.Component {
  state = {
    showingModal: false,
    title: "",
  };

  componentDidMount() {
    this.props.fetchBoards();
  }

  componentDidUpdate(prevProps) {
    if (this.props.boardAdded !== prevProps.boardAdded) {
      this.setState({showingModal: false, title: ''})
    }
    if (this.props.currentBoard !== prevProps.currentBoard && this.props.currentBoard) {
      this.props.fetchLists();
    }
    if (this.props.listsFetched !== prevProps.listsFetched && this.props.listsFetched) {
      this.props.history.push(`/board/${this.props.currentBoard}`)
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRoute = (name) => {
    this.props.getCurrentBoard(name);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBoard(this.state.title)
  }

  showModal = () => {
    this.setState({ showingModal: true });
  };

  hideModal = () => {
    this.setState({ showingModal: false });
  };

  render() {
    return (
      <BoardWrapper>
        {this.props.fetchingBoards ? (
          <p> ur boards b coming </p>
        ) : (
          <Boards handleRoute={this.handleRoute} boards={this.props.boards} />
        )}
        <div onClick={this.showModal}>
        <BoardCard
          text={"Create a new board..."}
          createNew={true}
        />
        </div>
        <Modal
          show={this.state.showingModal}
          handleClose={this.hideModal}
          handleChange={this.handleChange}
          title={this.state.title}
          handleSubmit={this.handleSubmit}
        />
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
