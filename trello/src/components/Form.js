import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import close from '../assets/close.svg';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => (props.type === 'Card' ? '0 4px 4px 4px' : '0')};
`;

const StyledForm = styled.form`
  width: 100%;
  border-radius: 3px;
  padding: ${props =>
    props.type === 'Card' ? '4px 8px' : props.type === 'Edit' ? '0' : '4px'};
  background-color: ${props =>
    props.type === 'Edit' ? 'transparent' : '#e2e4e6'};
  width: ${props => (props.type === 'Edit' ? '256px' : '272px')};

  &:focus {
    outline: none;
  }
`;
const TextareaWrapper = styled.div`
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
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  min-height: 54px;
  height: ${props => (props.kind === 'Edit' ? '90px' : 'initial')};
  margin-bottom: 4px;
  outline: none;
  resize: ${props => (props.kind === 'Edit' ? 'none' : 'initial')};
`;

const Input = TextareaWrapper.withComponent('input').extend`
  border-color: #298fca;
  width: 100%;
  height: initial;
  box-shadow: 0 0 2px #298fca;
  padding: 9px 8px;
  max-height: 162px;
  margin-bottom: 0;
`;

const Close = styled.img`
  height: 32px;
  padding-top: 5px;
  color: #999;
  padding-left: 8px;
`;

const Form = ({
  handleChange,
  handleSubmit,
  inputValue,
  type,
  handleClose,
  inputRef,
  handleBlur,
  divRef,
}) => {
  return (
    <StyledForm
      tabIndex="0"
      innerRef={divRef}
      type={type}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
    >
      {type === 'Card' || type === 'Edit' ? (
        <TextareaWrapper>
          <Textarea
            kind={type}
            type="text"
            onChange={handleChange}
            value={inputValue}
            placeholder="Enter a title for this card..."
            innerRef={inputRef}
          />
        </TextareaWrapper>
      ) : (
        <Input
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="Enter list title..."
        />
      )}
      {type === 'Edit' ? (
        <Button value="Save" />
      ) : (
        <ButtonWrapper type={type}>
          <Button value={`Add ${type}`} />
          <Close src={close} onClick={handleClose} />
        </ButtonWrapper>
      )}
    </StyledForm>
  );
};

export default Form;
