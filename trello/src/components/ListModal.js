import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import MoveModalContainer from '../containers/MoveModalContainer';
import close from '../assets/close.svg';

const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: ${props =>
    props.board ? '-173px' : props.move ? '-101px' : '-90px'};
  width: 300px;
  display: ${props => (props.show ? 'block' : 'none')};
  background: white;
  border: 1px solid #d6dadc;
  border-radius: 3px;
  cursor: auto;
  z-index: 1000;
`;
const ModalHeader = styled.div`
  z-index: 100;
  position: relative;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #d6dadc;
  padding: 10px 0;
  margin: 0 12px;

  p {
    color: #8c8c8c;
    line-height: 24px;
    left: ${props => (props.board ? '32%' : '38%')};
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
`;

const Input = styled.input`
  width: 100%;
  background-color: #e2e4e6;
  border: 1px solid #cdd2d4;
  border-radius: 3px;
  padding: 6px 8px;
  margin: 0 0 12px;
`;

const Label = styled.label`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
`;

const ListModal = ({
  handleSubmit,
  handleChange,
  board,
  title,
  showing,
  handleClose,
  handleDelete,
  value,
  move,
}) => (
  <ModalWrapper board={board} move={move} show={showing}>
    <ModalHeader board={board}>
      <p>{title}</p> <img src={close} onClick={handleClose} />
    </ModalHeader>

    {move ? (
      <MoveModalContainer />
    ) : (
      <ModalOptions onClick={handleDelete}>Delete List</ModalOptions>
    )}
  </ModalWrapper>
);

export default ListModal;
