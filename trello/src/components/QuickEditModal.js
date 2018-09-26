import React from 'react';
import QuickEdit from './QuickEdit';
import close from '../assets/close.svg';
import Form from '../components/Form';
import styled from 'styled-components';

const ContentContainer = styled.div`
  cursor: default;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  padding: 0 8px;
  display: flex;
`;

class QuickEditModal extends React.Component {
  state = {
    showingModal: false,
    value: '',
  };

  componentDidMount() {
    console.log(this.props.item.title);
    this.inputRef.focus();
  }

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({ value: this.props.item.title });
    }
  }

  handleClose = e => {
    e.stopPropagation();
    this.setState({ showingModal: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleEdit(this.state.value);
  };

  render() {
    return (
      <ContentContainer onClick={this.props.handleClick}>
        <Content
          onClick={e => e.stopPropagation()}
          top={`${this.props.top}px`}
          left={`${this.props.left}px`}
        >
          <Form
            handleSubmit={this.handleSubmit}
            inputRef={el => (this.inputRef = el)}
            inputValue={this.state.value}
            handleChange={e => this.setState({ value: e.target.value })}
            type="Edit"
          />
          <QuickEdit
            handleClick={() => this.setState({ showingModal: true })}
            handleDelete={this.props.handleDelete}
            showing={this.state.showingModal}
            handleClose={this.handleClose}
          />
        </Content>
        <img
          src={close}
          style={{
            float: 'right',
            height: '30px',
            cursor: 'pointer',
            marginTop: '45px',
          }}
          onClick={this.props.handleClick}
        />
      </ContentContainer>
    );
  }
}

export default QuickEditModal;
