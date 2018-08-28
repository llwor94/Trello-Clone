import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchCurrentItem, clearCurrentItem, deleteItem } from "../actions/itemActions";
import { listByItem } from "../reducers/itemReducer";
import ListItem from "../components/ListItem";
import ItemModal from "../components/ItemModal";
import QuickEditModal from "../components/QuickEditModal";

class ListItemContainer extends Component {
  state = {
    isHovering: false,
    editModalShowing: false,
    largeModalShowing: false,
    top: "",
    left: "",
  };

  handleItemClick = () => {
    let position = this.node.getBoundingClientRect();
    this.setState({ top: position.top, left: position.left, editModalShowing: true });
    this.props.fetchCurrentItem(this.props.item.id); 
  };

  handleClick = e => {
    e.stopPropagation();
    this.props.clearCurrentItem();
    this.setState({ top: '', left: '', editModalShowing: false})
  }

  render() {
    return (
      <Fragment>
        <div ref={node => (this.node = node)}>
          <ListItem
            item={this.props.item}
            handleMainClick={() => this.largeModalShowing}
            hovered={this.state.isHovering}
            toggleHover={() =>
              this.setState(prevState => ({
                isHovering: !prevState.isHovering,
              }))
            }
            handleEditClick={this.handleItemClick}
          />

          {this.state.largeModalShowing && (
            <ItemModal
              handleMove={list => this.props.moveItem(this.props.item, list)}
              item={this.props.currentItem}
              list={this.props.list}
              handleClose={() => this.setState({ largeModalShowing: false })}
            />
          )}
          {this.state.editModalShowing && (
            <QuickEditModal
              handleDelete={() => this.props.deleteItem(this.props.currentItem.id)}
              item={this.props.currentItem}
              top={this.state.top}
              left={this.state.left}
              handleClick={this.handleClick}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: listByItem(state, ownProps.item),
  currentItem: state.itemReducer.currentItem,
});

export default connect(
  mapStateToProps,
  { fetchCurrentItem, clearCurrentItem, deleteItem }
)(ListItemContainer);
