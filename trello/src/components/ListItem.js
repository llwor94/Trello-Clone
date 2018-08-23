import React from "react";
import styled from "styled-components";
import edit from '../assets/edit.svg'

const StyledItem = styled.div`
  min-height: 32px;
  background-color: ${props => (props.hovered ? "#edeff0" : "white")};
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  margin: 0 8px 8px;
  color: black;
  cursor: pointer;
  white-space: normal;
  padding: 0 2px 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Edit = styled.img`
  width: 28px;
  height: 28px;
  padding: 5px;
  &:hover {
    color: #4d4d4d;
    background-color: #cdd2d4;
    border-radius: 3px;
  }
`

const ListItem = ({ item, handleMainClick, hovered, toggleHover, handleEditClick }) => (
  <StyledItem
    hovered={hovered}
    onMouseEnter={toggleHover}
    onMouseLeave={toggleHover}
  >
    <div onClick={handleMainClick} style={{width: '200px'}}>{item}</div>
    {hovered && <Edit src={edit} onClick={handleEditClick}/> }
  </StyledItem>
);

export default ListItem;
