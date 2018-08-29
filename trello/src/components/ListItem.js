import React from "react";
import styled from "styled-components";
import edit from '../assets/edit.svg'
import description from '../assets/description.svg';

const StyledItem = styled.div`
  position: relative;
  z-index: 0;
  min-height: 32px;
  background-color: white; 
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  margin: 0 8px 8px;
  color: ${props => props.isDragging ? '#8c8c8c' : 'black'};
  cursor: pointer;
  white-space: normal;
  padding: 0 2px 0 5px;
  display: flex;
  flex-direction: column;
  
  align-items: flex-start;

  &:hover {
    background-color: ${props => props.isDragging ? '#8c8c8c' : '#edeff0'};
    img {
      opacity: ${props => props.isDragging ? '0' : '1'};
    }
  }
`;

const Name = styled.p`
  width: 235px;
  margin: 5px 0;
  line-height: 17px;
`

const Edit = styled.img`
  transition: all .3s;
  opacity: 0;
  position: absolute;
  top: 2px;
  right: 2px;
  width: 28px;
  height: 28px;
  padding: 5px;
  &:hover {
    color: #4d4d4d;
    background-color: #cdd2d4;
    border-radius: 3px;
  }
`
const Icon = styled.img`
  height: 18px;
  display: inline-block;
  margin: 0 4px 4px 0;
`

const ListItem = ({ item, handleMainClick, handleEditClick, onDragStart, onDrop, isDragging }) => (
  <StyledItem isDragging={isDragging} draggable onDrop={onDrop} onDragStart={e => onDragStart(e, item.id)}>
    <Name onClick={handleMainClick}>{item.name}</Name>
    {item.description && <Icon src={description}/>}
     <Edit src={edit} onClick={handleEditClick}/> 
  </StyledItem>
);

export default ListItem;
