import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${props => (props.show ? "block" : "none")};
`;

const ModalContent = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: auto;
`;

const Modal = ({ show, handleClose, handleChange, title, handleSubmit }) => {
  return (
    <ModalWrapper show={show}>
      <ModalContent>
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
        <div onClick={handleClose}> &times; </div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
