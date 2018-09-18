import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  display: inline-block;
  padding: 0 8px;
  line-height: 32px;
  margin: 8px;
  border-radius: 3px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const BoardHeader = ({ children, handleClick }) => (
  <Header onClick={handleClick}>{children}</Header>
);

export default BoardHeader;
