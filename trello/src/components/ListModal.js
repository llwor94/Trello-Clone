import React from "react";
import styled from "styled-components";
import close from "../assets/close.svg";

const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: ${props => props.board ? '-173px' : '-90px'};
  width: 300px;
  display: ${props => (props.show ? "block" : "none")};
  background: white;
  border: 1px solid #d6dadc;
  border-radius: 3px;
  cursor: auto;
  z-index: 100;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #d6dadc;
  padding: 10px 0;
  margin: 0 12px;

  p {
    color: #8c8c8c;
    line-height: 24px;
    left: ${ props => props.board ? '32%' : '38%'};
    position: absolute;
    font-weight: normal;
  }
  img {
    color: #8c8c8c;
    height: 20px;
    cursor: pointer;
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

const Form = styled.form`
  width: 100%;
  padding: 0 12px 12px;
`

const Input = styled.input`
  width: 100%;
  background-color: #e2e4e6;
  border: 1px solid #cdd2d4;
  border-radius: 3px;
  padding: 6px 8px;
  margin: 0 0 12px;
`

const Button = styled.input`
  background: #5aac44;
  box-shadow: 0 1px 0 #519839;
  color: #fff;
  padding: 8px 24px;
  border-radius: 3px;
  outline: none;
  font-weight: bold;
  border: none;
  margin-top: 8px;

`

const Label = styled.label`
  color: #8c8c8c;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
`

const ListModal = ({
  handleSubmit,
  handleChange,
  board,
  title,
  showing,
  handleClose,
  handleDelete,
  value
}) => (
  <ModalWrapper board={board} show={showing}>
    <ModalHeader board={board}>
      <p>{title}</p> <img src={close} onClick={handleClose} />
    </ModalHeader>
    {board ? (
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input type='text' value={value} onChange={handleChange} />
        <Button type='submit' value='Rename'/>
      </Form>
    ) : (
      <ModalOptions onClick={handleDelete}>Delete List</ModalOptions>
    )}
  </ModalWrapper>
);

export default ListModal;
