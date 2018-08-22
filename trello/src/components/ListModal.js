import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: -90px;
  width: 300px;
  display: ${props => props.show ? 'block' : 'none'};
  background: white;
  border: 1px solid #d6dadc;
  border-radius: 3px;
  cursor: auto;
  z-index: 100;
`
const ModalHeader = styled.div`
  line-height: 36px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #d6dadc;
  margin: 5px 12px;
  
  p {
    color: #8c8c8c;
    left: 38%;
    position: absolute;
  };
  div {
    color: #8c8c8c;
    font-size: 20px;
    cursor: pointer;
  }
`
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
`

const ListModal = ({ showing, handleClose, handleDelete }) => (
  <ModalWrapper show={showing}>
    <ModalHeader><p>List Actions</p> <div onClick={handleClose}>&times;</div></ModalHeader>
    <ModalOptions onClick={handleDelete}>Delete List</ModalOptions>
  </ModalWrapper>
)

export default ListModal;