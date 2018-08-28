import React from "react";
import styled from "styled-components";
import edit from '../assets/edit.svg'

const StyledItem = styled.div`
  position: relative;
  z-index: 0;
  min-height: 32px;
  background-color: ${props => props.isDragging ? '#8c8c8c' : 'white'};
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  margin: 0 8px 8px;
  color: ${props => props.isDragging ? '#8c8c8c' : 'black'};
  cursor: pointer;
  white-space: normal;
  padding: 0 2px 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #edeff0;
    img {
      opacity: 1;
    }
  }
`;

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

const ListItem = ({ item, handleMainClick, handleEditClick, onDragStart, onDrag, isDragging }) => (
  <StyledItem isDragging={isDragging} draggable onDrag={onDrag} onDragStart={e => onDragStart(e, item.id)}>
    <div onClick={handleMainClick} style={{width: '235px', margin: '5px 0', lineHeight: '17px'}}>{item.name}</div>
     <Edit src={edit} onClick={handleEditClick}/> 
  </StyledItem>
);

export default ListItem;
