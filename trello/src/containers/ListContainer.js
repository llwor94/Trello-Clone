import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchLists, deleteList } from "../actions/listActions";
import styled from "styled-components";
import List from "../components/List";
import ListHeader from '../components/ListHeader';
import AddListContainer from "../containers/AddListContainer";

const ListWrapper = styled.div`
  width: 272px;
  flex-shrink: 0;
  background-color: #e2e4e6;
  max-height: 100%;
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;
`;

class ListContainer extends Component {
  //refresh single list if add something
  componentDidUpdate(prevProps) {
    if (this.props.itemAdded !== prevProps.itemAdded) {
      this.props.fetchLists();
    }
  }

  

  render() {
    return (
      <ListWrapper>
      {this.props.list ?
        <Fragment>
          <ListHeader name={this.props.list.name} handleDelete={() => this.props.deleteList(this.props.list.name)} />
          <List list={this.props.list} />
        </Fragment>
        : <AddListContainer /> }
      </ListWrapper>
    );
  }
}
//need current list
const mapStateToProps = state => ({
  itemAdded: state.listReducer.itemAdded,
  listDeleted: state.listReducer.listDeleted
});

export default connect(
  mapStateToProps,
  { fetchLists, deleteList }
)(ListContainer);
