import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BoardWrapper = styled.div`
  width: 790px;
  margin: 10px auto;
`
const BoardCard = styled.div`
  width: 23%;
  margin: 0 2% 8px 0;
  height: 112px;
  background: #026aa7;
`

const Boards = ({ boards }) => (
  <BoardWrapper>
    <h4>Personal Boards:</h4>
    {boards.map(board => (
      <Link key={board.id} to={`/board/${board.id}`}>
        <BoardCard>{board.name}</BoardCard>
      </Link>
    ))}
  </BoardWrapper>
)

export default Boards;