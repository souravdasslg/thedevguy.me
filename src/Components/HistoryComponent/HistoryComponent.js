import React, { Component } from "react"
import { connect } from "react-redux"
import * as actionsTypes from "../../store/actions"
import "./HistoryComponent.css"
function HistoryItem(props) {
  return (
    <div
      className="history-item"
      onClick={() => props.onClickHandler(props.url)}
    >
      <span className="history-item__method">{props.method}</span>
      {props.url}
    </div>
  )
}

class HistoryComponent extends Component {
  onClickRequestHistory = url => {
    console.log(url)
  }
  componentDidMount() {
    this.props.onHistoryItemClick("/about/me")
  }
  render() {
    return (
      <div id="history-container">
        <h3> History </h3>
        <HistoryItem
          method="GET"
          url="/about/me"
          onClickHandler={this.props.onHistoryItemClick}
        />
        <HistoryItem
          method="GET"
          url="/my/projects"
          onClickHandler={this.props.onHistoryItemClick}
        />
        <HistoryItem
          method="GET"
          url="/experience"
          onClickHandler={this.props.onHistoryItemClick}
        />
        <HistoryItem
          method="POST"
          url="/contact/me"
          onClickHandler={this.props.onHistoryItemClick}
        />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onHistoryItemClick: url =>
      dispatch({ type: actionsTypes.HISTORY_ITEM_CLICKED, payload: url })
  }
}
export default connect(null,mapDispatchToProps)(HistoryComponent)
