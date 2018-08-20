import React from "react";
import { connect } from "react-redux";
import { fetchBoards, addBoard } from "../actions/boardActions";
import Boards from "../components/Boards";
import BoardCard from "../components/BoardCard";
import styled from "styled-components";
import Modal from "../components/Modal";

const BoardWrapper = styled.div`
  width: 790px;
  margin: 10px auto;
`;
const StyledModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class BoardContainer extends React.Component {
  state = {
    showingModal: false,
    title: "",
  };

  componentDidMount() {
    this.props.fetchBoards();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
          <Boards boards={this.props.boards} />
        )}
        <div onClick={this.showModal}>
        <BoardCard
          text={"Create a new board..."}
          createNew={true}
        />
        </div>
        <StyledModal
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
});

export default connect(
  mapStateToProps,
  { fetchBoards, addBoard }
)(BoardContainer);
