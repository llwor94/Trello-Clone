import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItem, deselectItem } from "../actions/itemActions";
import ListItem from "../components/ListItem";
import ItemModal from "../components/ItemModal";
import QuickEditModal from '../components/QuickEditModal'

class ListItemContainer extends Component {
  state = {
    isHovering: false,
    editModalShowing: false,
  };

  componentDidMount() {
    console.log(this.props.list, this.props.item);
  }

  handleLargeModal = () => {
    this.props.fetchItem(this.props.list.name, this.props.item);
  };

  render() {
    return (
      <div>
        <ListItem
          item={this.props.item}
          handleMainClick={this.handleLargeModal}
          hovered={this.state.isHovering}
          toggleHover={() => this.setState(prevState => ({isHovering: !prevState.isHovering}))}
          handleEditClick={() => this.setState({editModalShowing: true})}
        />
        {this.props.currentItem && (
          <ItemModal
            item={this.props.currentItem}
            handleClose={() => this.props.deselectItem()}
          />
        )}
        {this.state.editModalShowing &&
          <QuickEditModal item={this.props.currentItem}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentItem: state.itemReducer.currentItem,
});

export default connect(
  mapStateToProps,
  { fetchItem, deselectItem }
)(ListItemContainer);
