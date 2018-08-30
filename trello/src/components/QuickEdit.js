import React from 'react';
import ListModal from './ListModal';
import styled from 'styled-components';
import garbage from '../assets/garbage.svg';
import arrow from '../assets/arrow.svg';

const Wrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const QuickEditItem = styled.div`
  z-index: 1;
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 3px;
  color: #e6e6e6;
  float: left;
  margin-bottom: 4px;
  padding: 6px 12px 6px 8px;
  cursor: pointer;
  transition: transform 85ms ease-in;
  img {
    height: 15px;
    color: white;
    padding: 0 5px 0 0;
    display: inline-block;
  }

  span {
    padding-bottom: 5px;
    color: white;
  }

  &:hover {
    transform: translateX(5px);
  }
`;

const QuickEdit = ({ handleClick, handleDelete, showing, handleClose }) => (
  <Wrapper>
    <QuickEditItem onClick={handleClick}>
      <img src={arrow} />
      <span>Move</span>
    </QuickEditItem>
    <QuickEditItem onClick={handleDelete}>
      <img src={garbage} /> <span>Delete</span>
    </QuickEditItem>
    {showing && (
      <ListModal
        handleClose={handleClose}
        title="Move Card"
        showing={showing}
        move={true}
      />
    )}
  </Wrapper>
);

export default QuickEdit;
