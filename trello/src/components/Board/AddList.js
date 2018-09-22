import React from 'react';
import styled from 'styled-components';
import create from '../../assets/create.svg';

const AddListSelect = styled.div`
  line-height: 24px;
  padding: 8px 0;
  font-weight: normal;
  color: hsla(0, 0%, 100%, 0.7);
  width: 272px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;
`;

const Img = styled.img`
  display: inline;
  height: 17px;
  padding-top: 5px;
`;

const AddList = ({ handleClick }) => (
  <AddListSelect style={{ paddingLeft: '10px' }} onClick={handleClick}>
    <Img src={create} /> Add another list
  </AddListSelect>
);

export default AddList;
