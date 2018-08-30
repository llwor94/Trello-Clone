import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.input`
  background: #5aac44;
  box-shadow: 0 1px 0 #519839;
  color: #fff;
  padding: 8px 16px;
  border-radius: 3px;
  outline: none;
  margin-top: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background: #519839;
  }

  &:active {
    background: #49852e;
  }
`;

const Button = ({ value }) => (
  <StyledButton type='submit' value={value} />
)

export default Button;