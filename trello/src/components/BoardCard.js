import React from 'react';
import styled from 'styled-components';

const BoardCardWrapper = styled.div`
  width: 180px;
  margin: 0 15px 15px 0;
  height: 100px;
  background: ${props => props.createNew ? '#e2e4e6' : '#026aa7'};
  box-sizing: border-box;
  border-radius: 3px;
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