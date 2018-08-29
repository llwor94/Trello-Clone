import React from "react";
import close from "../assets/close.svg";
import garbage from "../assets/garbage.svg";
import arrow from "../assets/arrow.svg";
import styled from "styled-components";

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

const Form = styled.form`
  width: 256px;
  border-radius: 3px;
`;

const Input = styled.div`
  background: white;
  margin-bottom: 8px;
  width: 100%;
  outline: none;
  padding: 6px 8px 2px;
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  border: none;
`;
const TextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  height: 90px;
  resize: none;
`;

const Button = styled.input`
  background: #5aac44;
  box-shadow: 0 1px 0 #519839;
  color: #fff;
  padding: 8px 16px;
  border-radius: 3px;
  outline: none;
  margin-top: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background: #519839;
  }

  &:active {
    background: #49852e;
  }
`;

const QuickEdit = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const QuickEditItem = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  color: #e6e6e6;
  float: left;
  margin-bottom: 4px;
  padding: 6px 12px 6px 8px;
  cursor: pointer;
  transition: transform 85ms ease-in;
  img {
    height: 15px;
    color: white;
    padding: 0 5px 0 0;
    display: inline-block;
  }

  &:hover {
    transform: translateX(5px);
  }
`;
class QuickEditModal extends React.Component {
  componentDidMount() {
    this.ref.focus();
  }
  render() {
    return (
      <ContentContainer onClick={this.props.handleClick}>
        <Content
          onClick={e => e.stopPropagation()}
          top={`${this.props.top}px`}
          left={`${this.props.left}px`}
        >
          <Form>
            <Input>
              <TextArea
                innerRef={ref => (this.ref = ref)}
                value={this.props.item.name}
              />
            </Input>
            <Button type="submit" value="Save" />
          </Form>
          <QuickEdit>
            <QuickEditItem>
              {" "}
              <img src={arrow} />
              <span style={{ paddingBottom: "5px", color: "white" }}>Move</span>
            </QuickEditItem>
            <QuickEditItem onClick={this.props.handleDelete}>
              <img src={garbage} />{" "}
              <span style={{ paddingBottom: "5px", color: "white" }}>
                Delete
              </span>
            </QuickEditItem>
          </QuickEdit>
        </Content>
        <img
          src={close}
          style={{
            float: "right",
            height: "30px",
            cursor: "pointer",
            marginTop: "45px",
          }}
          onClick={this.props.handleClick}
        />
      </ContentContainer>
    );
  }
}

export default QuickEditModal;
