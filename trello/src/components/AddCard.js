import React from "react";
import styled from "styled-components";

const AddCardSelect = styled.div`
  padding: 8px;
  color: #8c8c8c;
  font-size: 14px;
  border-radius: 0 0 3px 3px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    background-color: #cbcdcf;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px 0;
`;

const Form = styled.form`
  padding: 0 8px;
`
const Input = styled.textarea`
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

const AddCard = ({
  itemsExist,
  addSelected,
  handleChange,
  handleSubmit,
  inputValue,
  handleClick,
}) => {
  if (!addSelected) {
    return (
      <AddCardSelect onClick={handleClick}>
        {itemsExist ? "+ Add another card" : "+ Add a card"}
      </AddCardSelect>
    );
  }
  return (

      <Form onSubmit={handleSubmit}>
        <Input type="text" onChange={handleChange} value={inputValue} placeholder="Enter a title for this card..." />
        <ButtonWrapper>
        <Button type="submit" value="Add Card" />
        <Close> &times; </Close>
        </ButtonWrapper>
      </Form>
      
  
  );
};

export default AddCard;
