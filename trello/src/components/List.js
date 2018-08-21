import React from "react";
import styled from "styled-components";
import ListItem from "../components/ListItem";
import AddCardContainer from "../containers/AddCardContainer";
import AddListContainer from '../containers/AddListContainer';
const ListWrapper = styled.div`
  width: 272px;
  background-color: #e2e4e6;
  max-height: 100%;
  margin: 0 8px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.add ? '#cbcdcf' : '#e2e4e6'};
  };
`;
const ListHeader = styled.div`
  font-size: 10px;
  line-height: 24px;
  margin: ${props => props.add ? '0' : '0 12px 3px'};
  padding: 10px 0 8px;
  
  h2 {
    font-weight: ${props => props.add ? 'normal' : 'bold'};
    color: ${props => props.add ? '#8c8c8c' : 'black'};

    &:hover {
      color: ${props => props.add ? 'white' : 'black'};
    }
  }
`;


const List = ({ list }) => {
  if (list) {
    return (
      <ListWrapper>
        <ListHeader>
          <h2>{list.name}</h2>
        </ListHeader>
        {list.items &&
          list.items.map((item, index) => <ListItem key={index} item={item} />)}
        <AddCardContainer list={list} />
      </ListWrapper>
    );
  }

  return (
    <ListWrapper add><ListHeader add><AddListContainer /></ListHeader></ListWrapper>
  )
};

export default List;
