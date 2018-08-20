import React from "react";
import { connect } from "react-redux";
import { fetchBoards } from "../actions/boardActions";
import Boards from "../components/Boards";

class BoardContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    return (
      <div>
        {this.props.fetchingBoards ? (
          <p> ur boards b coming </p>
        ) : (
          <Boards boards={this.props.boards}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boardReducer.boards,
  fetchingBoards: state.boardReducer.fetchingBoards,
});

export default connect(
  mapStateToProps,
  { fetchBoards }
)(BoardContainer);
