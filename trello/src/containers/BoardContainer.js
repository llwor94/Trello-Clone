import React from "react";
import { connect } from "react-redux";
import { fetchLists } from '../actions/listActions'

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLists(this.props.match.params.name)
  }
  render() {
    console.log(this.props.lists)
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.listReducer.lists,
})

export default connect(
  mapStateToProps,
  {fetchLists}
)(HomeContainer);