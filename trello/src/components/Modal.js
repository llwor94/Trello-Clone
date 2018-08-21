import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? "block" : "none")};
`;

const ModalContent = styled.section`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 96px;
  border-radius: 3px;
  background-color: black;
  padding: 5px 10px;
  div {
    color: white;
    text-align: right;
  }

  input {
    color: white;
    font-size: 16px;
    font-weight: bold;
    background-color: black;
    border: none;
  }
`;

const Modal = ({ show, handleClose, handleChange, title, handleSubmit }) => {
  return (
    <ModalWrapper show={show}>
      <ModalContent>
      <div onClick={handleClose}> &times; </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Add board title"
            value={title}
            required
          />
          <input type="submit" value='Submit'/>
        </form>
        
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
