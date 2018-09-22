import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteList } from '../actions/listActions';
import { moveItemToNewList } from '../actions/itemActions';
import { filteredItems } from '../reducers/itemReducer';
import styled from 'styled-components';
import ListItemContainer from '../containers/ListItemContainer';
import AddCardContainer from '../containers/AddCardContainer';
import ListHeader from '../components/List/ListHeader';

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
  handleDragOver = e => {
    e.preventDefault();
  };

  handleDrop = e => {
    this.props.moveItemToNewList(
      e.dataTransfer.getData('id'),
      this.props.list.id,
    );
  };
  render() {
    return (
      <ListWrapper onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
        <Fragment>
          <ListHeader
            name={this.props.list.name}
            handleDelete={() => this.props.deleteList(this.props.list.id)}
          />
          {this.props.items.map(item => (
            <ListItemContainer key={item.id} item={item} />
          ))}
          <AddCardContainer items={this.props.items} list={this.props.list} />
        </Fragment>
      </ListWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { items: filteredItems(state, ownProps.list) };
};

export default connect(
  mapStateToProps,
  { deleteList, moveItemToNewList },
)(ListContainer);
