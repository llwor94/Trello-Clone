import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  display: inline-block;
  padding: 0 8px;
  line-height: 32px;
  margin: 8px;
  border-radius: 3px;
`;

const BoardHeader = ({ board }) => (
  <Header>{board}</Header>
)

export default BoardHeader;