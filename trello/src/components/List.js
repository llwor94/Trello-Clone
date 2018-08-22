import React, { Fragment } from "react";
import ListItem from "../components/ListItem";
import AddCardContainer from "../containers/AddCardContainer";


const List = ({ list }) => {
  return (
    <Fragment>
      {list.items &&
        list.items.map((item, index) => <ListItem key={index} item={item} />)}
      <AddCardContainer list={list} />
    </Fragment>
  );
};

export default List;
