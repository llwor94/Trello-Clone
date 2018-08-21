import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  min-height: 20px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  margin-bottom: 8px;
  font-size: 14px;
  padding: 6px;
  color: black;
`

const ListItem = ({item}) => (
  <StyledItem>
    {item}
  </StyledItem>
)

export default ListItem;