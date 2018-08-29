import React, { Fragment } from "react";
import styled from "styled-components";
import EditDescription from "./EditDescription";
import ModalSidebar from './ModalSidebar';
import card from "../assets/card.svg";
import close from "../assets/close.svg";
import descript from "../assets/description.svg";

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  cursor: default;
  z-index: 1000;
`;
const ModalContent = styled.section`
  position: relative;
  overflow: hidden;
  display: block;
  margin: 48px 0 80px;
  width: 768px;
  text-align: left;
  background-color: #eaecee;
  border-radius: 3px;
  padding: 6px 6px 16px 16px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Icon = styled.img`
  height: 24px;
  color: #999;
  padding-right: 13px;
`;
const Close = Icon.extend`
  float: right;
  height: 30px;
  cursor: pointer;
`;

const Title = styled.div`
  h2 {
    font-size: 21px;
    line-height: 24px;
    padding-bottom: 5px;
  }
  p {
    color: #8c8c8c;
  }
`;

const Description = styled.form`
  width: 100%;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    display: inline-block;
    margin-right: 5px;
  }
  span {
    text-decoration: underline;
    color: #8c8c8c;
    cursor: pointer;
  }
`;

const MainContent = styled.div`
  margin: 30px 0 10px;
  width: 560px;
`;

class ItemModal extends React.Component {
  state = {
    isDescription: false,
    editDescription: false,
    description: "",
  };

  componentDidMount() {
    this.props.item.description &&
      this.setState({
        description: this.props.item.description,
        isDescription: true,
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.editDescription !== prevState.editDescription && this.state.editDescription) {
      this.inputRef.focus();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ editDescription: false, isDescription: true });
    this.props.handleSubmit(this.state.description);
  };

  handleFocus = () => {
    this.setState({ editDescription: true })
  }

  componentWillUnmount() {
    this.setState({
      editDescription: false,
      description: "",
      isDescription: false,
    });
  }
  render() {
    return (
      <ModalWrapper>
        <ModalContent>
          <Close src={close} onClick={this.props.handleClose} />
          <Wrapper>
            <Icon src={card} />
            <Title>
              <h2>{this.props.item.name}</h2>
              <p>
                in list <u>{this.props.list.name}</u>
              </p>
            </Title>
          </Wrapper>
          <MainContent>
            <Wrapper>
              <Icon src={descript} />
              <Description onSubmit={this.handleSubmit}>
                <h3>Description</h3>
                {!this.state.editDescription &&
                  this.state.description && <span onClick={this.handleFocus}>Edit</span>}
                <EditDescription
                  inputRef={el => this.inputRef = el}
                  isDescription={this.state.isDescription}
                  handleFocus={this.handleFocus}
                  edit={this.state.editDescription}
                  description={this.state.description}
                  handleChange={e =>
                    this.setState({ description: e.target.value })
                  }
                  handleClick={() => this.setState({ editDescription: false })}
                />
              </Description>
            </Wrapper>
            <ModalSidebar/>
          </MainContent>
        </ModalContent>
      </ModalWrapper>
    );
  }
}

export default ItemModal;
