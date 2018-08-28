import React, { Fragment } from "react";
import ListItemContainer from "../containers/ListItemContainer";
import AddCardContainer from "../containers/AddCardContainer";


const List = ({ items, list }) => {
  return (
    <Fragment>
        {items.map(item => <ListItemContainer key={item.id} item={item}/>)}
      <AddCardContainer items={items} list={list} />
    </Fragment>
  );
};

export default List;
