import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getDataIfNeeded,
  updateBoardName,
  getBoardsIfNeeded,
} from '../actions/boardActions';
import { clearList, fetchAllLists } from '../actions/listActions';
import { dismountCurrentBoard } from '../actions/boardActions';
import AddListContainer from './AddListContainer';
import ListContainer from './ListContainer';
import Modal from '../components/Modal';
import BoardHeader from '../components/Board/BoardHeader';
import styled from 'styled-components';
import UpdateBoardName from '../components/Board/UpdateBoardName';

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding-top: 40px;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`;

class BoardContainer extends React.Component {
  state = {
    value: '',
    showingModal: false,
  };
  componentDidMount() {
    console.log('mounted');
    this.props.getDataIfNeeded(this.props.match.params.id);
    this.setState({ value: this.props.board.title });
  }

  componentDidUpdate(prevProps) {
    if (this.props.board.title !== prevProps.board.title) {
      this.setState({ showingModal: false, value: this.props.board.title });
    }
  }

  handleClose = e => {
    e.stopPropagation();
    this.setState({ showingModal: false });
  };

  handleChangeName = e => {
    e.preventDefault();
    this.props.updateBoardName(this.state.value);
  };

  render() {
    if (!this.props.board) {
      return <p>loading...</p>;
    }

    return (
      <BoardWrapper>
        <BoardHeader handleClick={() => this.setState({ showingModal: true })}>
          {this.props.board.title}
          {this.state.showingModal && (
            <Modal
              handleClose={this.handleClose}
              title="Rename Board"
              showing={this.state.showingModal}
              board={true}
            >
              <UpdateBoardName
                handleSubmit={this.handleChangeName}
                value={this.state.value}
                handleChange={e => this.setState({ value: e.target.value })}
              />
            </Modal>
          )}
        </BoardHeader>
        <ListWrapper>
          {this.props.lists.map(list => (
            <ListContainer key={list.id} list={list} />
          ))}
          <AddListContainer />
        </ListWrapper>
      </BoardWrapper>
    );
  }
}

const mapStateToProps = state => ({
  board: state.boardReducer.currentBoard,
  lists: state.listReducer.lists,
});

export default connect(
  mapStateToProps,
  {
    getDataIfNeeded,
    clearList,
    updateBoardName,
    dismountCurrentBoard,
    getBoardsIfNeeded,
    fetchAllLists,
  },
)(BoardContainer);
