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

  componentDidUpdate(prevProps) {
    if (this.props.currentItem !== prevProps.currentItem) {
      let position = this.node.getBoundingClientRect();
      this.setState({ top: position.top, left: position.left });
    }
  }

  handleItemClick = () => {
    this.props.fetchCurrentItem(this.props.item.id);
    console.log(this.node);
  };

  handleClick = e => {
    e.stopPropagation();
    this.props.clearCurrentItem();
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
          {this.props.currentItem !== null && (
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
