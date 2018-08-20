import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import BoardCard from './BoardCard';

const Boards = ({ boards }) => (
  <Fragment>
    <h4>Personal Boards:</h4>
    {boards.map((board, index) => (
      <Link key={index} to={`/board/${board.name}`}>
        <BoardCard text={board.name} createNew={false}/>
      </Link> 
    ))}
  </Fragment>
)

export default Boards;