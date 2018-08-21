import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px 0;
`;

const StyledForm = styled.form`
  padding: 0 8px;
`
const TextArea = styled.textarea`
  width: 100%;
  display: block;
  outline: none;
  height: 50px;
  padding: 6px 8px;
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  border: none;
  font-size: 14px;
  resize: none;
`

const Input = styled.input`
  width: 100%;
  display: block;
  font-size: 14px;
  border-color: #298fca;
  padding: 6px 8px;
  border-radius: 3px;
  outline: none;
  box-shadow: 0 0 2px #298fca;
`
const Button = styled.input`
  background: #5aac44;
  color: #fff;
  padding: 8px 16px;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  font-weight: bold;
`

const Close = styled.div`
  font-size: 26px;
  color: #999;
  padding-left: 8px;
`

const Form = ({handleChange, handleSubmit, inputValue, type, handleClose }) => {
  return (

      <StyledForm onSubmit={handleSubmit}>
        { type === 'Card' ? 
        <TextArea type="text" onChange={handleChange} value={inputValue} placeholder='Enter a title for this card...' />
        : <Input type="text" onChange={handleChange} value={inputValue} placeholder='Enter list title...' />
        }
        <ButtonWrapper>
        <Button type="submit" value={`Add ${type}`} />
        <Close onClick={handleClose}> &times; </Close>
        </ButtonWrapper>
      </StyledForm>
      
  
  );
};

export default Form;
