import React, { Fragment } from "react";
import styled from "styled-components";
import close from "../assets/close.svg";

const Textarea = styled.textarea`
  border-radius: 3px;
  padding: 6px 8px;
  width: 100%;
  display: block;
  overflow: hidden;
  word-wrap: break-word;
  resize: none;
  height: ${props => (props.edit ? "108px" : "62px")};
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 1px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 4px;
  outline: none;
`;

const Button = styled.input`
  background: #5aac44;
  box-shadow: 0 1px 0 #519839;
  color: #fff;
  transition: background 0.3s ease;
  padding: 8px 16px;
  border-radius: 3px;
  outline: none;
  font-weight: bold;
  border: none;
  margin-right: 7px;
  cursor: pointer;
`;

const DescriptionButtons = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

const Description = styled.div`
  cursor: pointer;
  padding: 5px 0;
`;

const EditDescription = ({
  handleFocus,
  edit,
  description,
  handleChange,
  handleClick,
  isDescription,
  inputRef
}) => (
  <Fragment>
    {(isDescription && !edit) ? (
      <Description onClick={handleFocus}>{description}</Description>
    ) : (
      <Textarea
        innerRef={inputRef}
        placeholder="Add a more detailed description..."
        onFocus={handleFocus}
        edit={edit}
        value={description}
        onChange={handleChange}
      />
    )}
    {edit && (
      <DescriptionButtons>
        <Button type="submit" value="Save" />
        <img src={close} onClick={handleClick} />
      </DescriptionButtons>
    )}
  </Fragment>
);

export default EditDescription;
