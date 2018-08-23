import React from "react";
import styled from "styled-components";
import close from '../assets/close.svg';

const ButtonWrapper = styled.div`
  display: flex;
  padding: ${props => props.type === 'Card' ? '4px' : '4px 0 0 0'};
`;

const StyledForm = styled.form`
  width: 100%;
  border-radius: 3px;
  padding: ${props => props.type === 'Card' ? '4px 8px' : '4px'};
  background-color: #e2e4e6;
  width: 272px;
`
const TextArea = styled.div`
  background: white;
  display: block;
  outline: none;
  padding: 6px 8px 2px;
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  border: none;
  resize: vertical;
  max-width: 300px;
  margin-bottom: 4px;
`

const Input = TextArea.withComponent('input').extend`
  border-color: #298fca;
  width: 100%;
  height: initial;
  box-shadow: 0 0 2px #298fca;
  padding: 9px 8px;
  max-height: 162px;
  margin-bottom: 0;
`

const Button = styled.input`
  background: #5aac44;
  box-shadow: 0 1px 0 #519839;
  color: #fff;
  padding: 8px 16px;
  border-radius: 3px;
  outline: none;
  font-weight: bold;
  border: none;

  &:hover {
    background: #519839;
  }

  &:active {
    background: #49852e
  }
`

const Close = styled.img`
  font-size: 26px;
  color: #999;
  padding-left: 8px;
`

const Form = ({handleChange, handleSubmit, inputValue, type, handleClose }) => {
  return (

      <StyledForm type={type} onSubmit={handleSubmit}>
        { type === 'Card' ? 
        <TextArea ><textarea style={{display: 'block', width: '100%', border: 'none', minHeight: '54px', marginBottom: '4px'}}type="text" onChange={handleChange} value={inputValue} placeholder='Enter a title for this card...' /></TextArea>
        : <Input type="text" onChange={handleChange} value={inputValue} placeholder='Enter list title...' />
        }
        <ButtonWrapper type={type}>
          <Button type="submit" value={`Add ${type}`} />
          <Close src={close} onClick={handleClose}/>
        </ButtonWrapper>
      </StyledForm>
      
  
  );
};

export default Form;
