import React, { Fragment } from 'react';
import BoardCard from './BoardCard';
import user from '../../assets/user-regular.svg';
import styled from 'styled-components';

const StyledIcon = styled.img`
  height: 15px;
  opacity: 0.5;
  padding: 0 10px 0 6px;
`;
const BoardHeader = styled.div`
  display: flex;
  padding-bottom: 11px;
`;
const BoardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Boards = ({ boards, handleRoute }) => (
  <Fragment>
    <BoardHeader>
      <StyledIcon src={user} />
      <h4>Personal Boards</h4>
    </BoardHeader>
    <BoardsWrapper>
      {boards.map(board => (
        <BoardCard
          key={board.id}
          handleClick={() => handleRoute(board.id)}
          createNew={false}
        >
          {board.title}
        </BoardCard>
      ))}
    </BoardsWrapper>
  </Fragment>
);

export default Boards;
