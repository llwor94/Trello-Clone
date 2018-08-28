import React from "react";
import styled from "styled-components";
import close from "../../assets/close.svg"

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;

const Form = styled.form`
  margin-top: 24px;
  padding: 24px;
  width: auto;
`

const ModalContent = styled.section`
  width: 300px;
  height: 96px;
  border-radius: 3px;
  background-color: rgb(0, 121, 191);
  padding: 10px;
`;

const Input = styled.input`
  color: white;
  background-color: rgb(0, 121, 191);
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 2px 8px;
  width: calc(100% - 18px - 16px);
  line-height: 24px;
  border-radius: 3px;
  ::placeholder {
    color: #bfe8ff;
  };
  &:hover, &:active, &:focus {
    outline: none;
    background: hsla(0,0%,100%,.15);
  };
`
const Close = styled.img`
  float: right;
  cursor: pointer;
  color: white;
  height: 23px;
  fill: white;
`;

const Button = styled.input`
  margin: 8px 0;
  box-shadow: none;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 3px;
  background: #5aac44;
  box-shadow: 0 1px 0 #519839;
  color: #fff;
  border: none;
  &:focus {
    outline: none;
    background: #519839 100%;
  }

  &:disabled {
    background: #f8f9f9;
    color: #b6bbbf;
    cursor: default;
  }
`

const Modal = ({ show, handleClose, handleChange, title, handleSubmit }) => {
  return (
    <ModalWrapper show={show}>
      <Form onSubmit={handleSubmit}>
        <ModalContent>
          <Close src={close} onClick={handleClose} />

          <Input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Add board title"
            value={title}
            autoComplete='off'
            required
          />
        </ModalContent>
        <Button type="submit" value="Create Board" disabled={title.length === 0}/>
      </Form>
    </ModalWrapper>
  );
};

export default Modal;
