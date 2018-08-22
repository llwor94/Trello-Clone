import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItem, deselectItem } from '../actions/itemActions'
import ListItem from '../components/ListItem'
import ItemModal from '../components/ItemModal'


class ListItemContainer extends Component {
  // state = {
  //   showingModal: false
  // }

  componentDidMount() {
    console.log(this.props.list, this.props.item)
  }

  handleClick = () => {
    this.props.fetchItem(this.props.list.name, this.props.item)
  }

  render() {
    return (
      <div>
        <ListItem item={this.props.item} handleClick={this.handleClick} />
        {this.props.currentItem && <ItemModal item={this.props.currentItem} handleClose={() => this.props.deselectItem()}/>}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  currentItem: state.itemReducer.currentItem
})

export default connect(mapStateToProps, { fetchItem, deselectItem })(ListItemContainer)