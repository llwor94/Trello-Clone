import React from 'react';
import styled from 'styled-components';

const BoardCardWrapper = styled.div`
  width: 23%;
  margin: 0 2% 8px 0;
  height: 112px;
  background: ${props => props.createNew ? '#e2e4e6' : '#026aa7'};
  box-sizing: border-box;
  border-radius: 2px;
  color: ${props => props.createNew ? '#8c8c8c' : 'white'};
  font-weight: bold;
  padding: 8px;
`

const BoardCard = ({ text, createNew }) => (
  <BoardCardWrapper createNew={createNew}>
    {text}
  </BoardCardWrapper>
)

export default BoardCard;