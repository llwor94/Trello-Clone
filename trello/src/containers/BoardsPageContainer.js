import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  fetchBoards,
  addBoard,
  getCurrentBoard,
} from '../actions/boardActions';
import { fetchLists } from '../actions/listActions';
import Boards from '../components/Board-Page/Boards';
import BoardCard from '../components/Board-Page/BoardCard';
import Modal from '../components/Board-Page/Modal';
import BoardWrapper from '../components/Board-Page/BoardWrapper';

class BoardsPage extends React.Component {
  state = {
    showingModal: false,
    title: '',
  };

  componentDidMount() {
    this.props.fetchBoards();
  }

  componentDidUpdate(prevProps) {
    if (this.props.boards !== prevProps.boards) {
      this.setState({ showingModal: false, title: '' });
    }
    if (
      this.props.fetchingItems !== prevProps.fetchingItems &&
      !this.props.fetchingItems
    ) {
      this.props.history.push(`/board/${this.props.currentBoard.id}`);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBoard(this.state.title);
  };

  render() {
    let token = localStorage.getItem('token');
    if (!this.props.loggedIn) return <Redirect to="/" />;
    return (
      <BoardWrapper>
        {this.props.fetchingBoards ? (
          <p> ur boards b coming </p>
        ) : (
          <Fragment>
            <Boards
              handleRoute={id => this.props.getCurrentBoard(id)}
              boards={this.props.boards}
            />
            <BoardCard
              handleClick={() => this.setState({ showingModal: true })}
              createNew={true}
            >
              Create a new board...
            </BoardCard>
          </Fragment>
        )}
        {this.state.showingModal && (
          <Modal
            handleClose={() => this.setState({ showingModal: false })}
            handleChange={e => this.setState({ title: e.target.value })}
            title={this.state.title}
            handleSubmit={this.handleSubmit}
          />
        )}
      </BoardWrapper>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boardReducer.boards,
  fetchingBoards: state.boardReducer.fetchingBoards,
  boardAdded: state.boardReducer.addingBoardSuccess,
  currentBoard: state.boardReducer.currentBoard,
  fetchingItems: state.itemReducer.fetchingItems,
  loggedIn: state.authReducer.loggedIn,
});

export default connect(
  mapStateToProps,
  { fetchBoards, addBoard, getCurrentBoard, fetchLists },
)(BoardsPage);
