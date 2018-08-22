import React, { Fragment } from "react";
import ListItemContainer from "../containers/ListItemContainer";
import AddCardContainer from "../containers/AddCardContainer";


const List = ({ list }) => {
  return (
    <Fragment>
      {list.items &&
        list.items.map((item, index) => <ListItemContainer key={index} item={item} list={list}/>)}
      <AddCardContainer list={list} />
    </Fragment>
  );
};

export default List;
