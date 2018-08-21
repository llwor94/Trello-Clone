import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import BoardCard from './BoardCard';
import user from '../assets/user-regular.svg';
import styled from 'styled-components';

const StyledIcon = styled.img`
  height: 15px;
  opacity: .5;
  padding: 0 10px 0 6px;
`
const BoardHeader = styled.div`
  display: flex;
  padding-bottom: 11px;
`
const BoardsWrapper = styled.div`
  display: flex;
  width: 100%;
`

const Boards = ({ boards }) => (
  <Fragment>
  <BoardHeader>
    <StyledIcon src= {user} /><h4>Personal Boards</h4>
    </BoardHeader>
    <BoardsWrapper>
    {boards.map((board, index) => (
      <Link key={index} to={`/board/${board.name}`}>
        <BoardCard text={board.name} createNew={false}/>
      </Link> 
    ))}
    </BoardsWrapper>
  </Fragment>
)

export default Boards;