import React, { Component } from "react";
import { addItem } from "../actions/listActions";
import AddCard from "../components/AddCard";
import { connect } from "react-redux";

class AddCardContainer extends Component {
  state = {
    selected: false,
    value: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemAdded !== prevProps.itemAdded && this.props.itemAdded) {
      this.setState({selected: false, value: ''})
    }
  }

  addNewCard = e => {
    e.preventDefault();
    this.props.addItem(this.state.value, this.props.list);
  };


  render() {
    return (
      <div>
        <AddCard
          itemsExist={this.props.list.items}
          addSelected={this.state.selected}
          handleChange={e => this.setState({ value: e.target.value })}
          handleClick={() => this.setState({ selected: true })}
          handleSubmit={this.addNewCard}
          inputValue={this.state.value}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemAdded: state.listReducer.itemAdded
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddCardContainer);
