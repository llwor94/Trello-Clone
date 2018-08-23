import React, { Component } from "react";
import ListModal from './ListModal'
import styled from "styled-components";

const Header = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  display: inline-block;
  padding: 0 8px;
  line-height: 32px;
  margin: 8px;
  border-radius: 3px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

class BoardHeader extends Component {
  state = {
    value: this.props.board,
    showingModal: false
  };

  handleClose = e => {
    e.stopPropagation();
    this.setState({ showingModal: false });
  }; 

  render() {
    return (
      <Header onClick={() => this.setState({ showingModal: true })}>
        {this.props.board}
        {this.state.showingModal && (
          <ListModal
            handleClose={this.handleClose}
            handleSubmit={e => (
              e.preventDefault(), this.props.changeName(this.state.value)
            )}
            value={this.state.value}
            handleChange={e => this.setState({ value: e.target.value })}
            title="Rename Board"
            board={true}
            showing={this.state.showingModal}
          />
        )}
      </Header>
    );
  }
}

export default BoardHeader;
