import React, { Component } from "react";
import { connect } from "react-redux";
import { listByItem, moveItem } from '../reducers/itemReducer'
import ListItem from "../components/ListItem";
import ItemModal from "../components/ItemModal";
import QuickEditModal from '../components/QuickEditModal'

class ListItemContainer extends Component {
  state = {
    isHovering: false,
    editModalShowing: false,
    largeModalShowing: false
  };

  componentDidMount() {
    console.log(this.props.list, this.props.item);
  }

  render() {
    return (
      <div>
        <ListItem
          item={this.props.item}
          handleMainClick={() => this.setState({ largeModalShowing: true })}
          hovered={this.state.isHovering}
          toggleHover={() => this.setState(prevState => ({isHovering: !prevState.isHovering}))}
          handleEditClick={() => this.setState({editModalShowing: true})}
        />
        
        
        {this.state.largeModalShowing && (
          <ItemModal
            handleMove={list => this.props.moveItem(this.props.item, list)}
            item={this.props.item}
            list={this.props.list}
            handleClose={() => this.setState({largeModalShowing: false})}
          />
        )}
        {this.state.editModalShowing &&
          <QuickEditModal item={this.props.item}/>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: listByItem(state, ownProps.item)
});

export default connect(
  mapStateToProps,
)(ListItemContainer);
