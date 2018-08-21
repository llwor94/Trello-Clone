import React from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';

const ListWrapper = styled.div`
  width: 272px;
  background-color: #e2e4e6;
  max-height: 100%;
  margin: 0 8px;
  padding: 0 8px;
`
const ListHeader = styled.div`
  font-size: 10px;
  line-height: 24px;
  margin: 0 0 8px;
  padding: 10px 0 8px;
`

const List = ({list}) => (
  <ListWrapper>
    <ListHeader><h2>{list.name}</h2></ListHeader>
    {list.items.map((item, index) => (
      <ListItem key={index} item={item} />
    )) }
    <div>Add another card</div>
  </ListWrapper>
)

export default List;