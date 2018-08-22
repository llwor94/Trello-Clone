import React from "react";
import { connect } from "react-redux";
import { fetchLists } from "../actions/listActions";
import ListContainer from "../containers/ListContainer";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`;

class ListsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    return (
      <ListWrapper>
        {this.props.lists.map((list, index) => (
          <ListContainer key={index} list={list} />
        ))}
        <ListContainer list={null} />
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.listReducer.lists,
});

export default connect(
  mapStateToProps,
  { fetchLists }
)(ListsContainer);
