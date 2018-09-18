import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getBoardIfNeeded,
  updateBoardName,
  getBoardsIfNeeded,
} from '../actions/boardActions';
import {
  clearList,
  getListsIfNeeded,
  fetchAllLists,
} from '../actions/listActions';
import { dismountCurrentBoard } from '../actions/boardActions';
import ListsContainer from '../containers/ListsContainer';
import ListModal from '../components/ListModal';
import BoardHeader from '../components/BoardHeader';
import styled from 'styled-components';
import Button from '../components/Button';

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding-top: 40px;
`;

const Form = styled.form`
  width: 100%;
  padding: 0 12px 12px;
`;

const Label = styled.label`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
`;

const Input = styled.input`
  width: 100%;
  background-color: #e2e4e6;
  border: 1px solid #cdd2d4;
  border-radius: 3px;
  padding: 6px 8px;
  margin: 0 0 12px;
`;

class BoardContainer extends React.Component {
  state = {
    value: this.props.board.name,
    showingModal: false,
  };
  componentDidMount() {
    console.log('mounted');
    this.props.fetchAllLists();
    this.props.getBoardsIfNeeded();
    this.props.getBoardIfNeeded(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.board.name !== prevProps.board.name) {
      this.setState({ showingModal: false });
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
    return (
      <Fragment>
        {this.props.board && (
          <BoardWrapper>
            <BoardHeader
              handleClick={() => this.setState({ showingModal: true })}
            >
              {this.props.board.name}
              {this.state.showingModal && (
                <ListModal
                  handleClose={this.handleClose}
                  title="Rename Board"
                  showing={this.state.showingModal}
                >
                  <Form onSubmit={this.handleChangeName}>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      value={this.state.value}
                      onChange={e => this.setState({ value: e.target.value })}
                    />
                    <Button value="Rename" />
                  </Form>
                </ListModal>
              )}
            </BoardHeader>
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
  {
    getBoardIfNeeded,
    clearList,
    updateBoardName,
    getListsIfNeeded,
    dismountCurrentBoard,
    getBoardsIfNeeded,
    fetchAllLists,
  },
)(BoardContainer);
