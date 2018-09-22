import React from 'react';
import Modal from '../Modal';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 10px;
  line-height: 24px;
  margin: 0 6px 3px 12px;
  padding: 5px 0 8px;
  display: flex;
  justify-content: space-between;

  h2 {
    padding-top: 5px;
    font-weight: bold;
    color: black;
  }
`;

const Actions = styled.div`
  color: #8c8c8c;
  font-size: 16px;
  height: 32px;
  width: 32px;
  text-align: center;
  position: relative;

  &:hover {
    color: #4d4d4d;
    background-color: #cdd2d4;
    border-radius: 3px;
  }
`;
const ModalOptions = styled.div`
  color: #444;
  text-align: left;
  line-height: 10px;
  font-weight: bold;
  padding: 12px;
  margin: 5px 0;

  &:hover {
    background-color: #298fca;
    color: white;
  }
`;

export default class ListHeader extends React.Component {
  state = {
    showingModal: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.handleDelete !== prevProps.handleDelete) {
      this.setState({ showingModal: false });
    }
  }

  handleClose = e => {
    e.stopPropagation();
    this.setState({ showingModal: false });
  };

  handleDelete = () => {
    this.props.handleDelete();
  };

  render() {
    return (
      <Header>
        <h2>{this.props.name}</h2>
        <Actions onClick={() => this.setState({ showingModal: true })}>
          ...
          <Modal
            title="List Actions"
            showing={this.state.showingModal}
            handleClose={this.handleClose}
            handleDelete={this.handleDelete}
          >
            <ModalOptions onClick={this.handleDelete}>Delete List</ModalOptions>
          </Modal>
        </Actions>
      </Header>
    );
  }
}
