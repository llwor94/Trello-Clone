import React, { Fragment } from "react";
import { connect } from "react-redux";
import ListContainer from "./ListContainer";
import styled from "styled-components";
import AddListContainer from "./AddListContainer";

const ListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`;

class ListsContainer extends React.Component {

  render() {
    return (
      <Fragment>
        <ListWrapper>
          {this.props.lists.map(list => (
            <ListContainer key={list.id} list={list} />
          ))}
          <AddListContainer />
        </ListWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.listReducer.lists,
});

export default connect(
  mapStateToProps,
)(ListsContainer);
