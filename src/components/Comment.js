import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteComment } from '../actions/сommentActions'

const propTypes = {
  comment: PropTypes.object.isRequired
}

class Comment extends Component {

  constructor(props) {
    super(props)

    this.deleteComment = this.deleteComment.bind(this)
  }

  deleteComment() {
    this.props.onDeleteComment(this.props.comment.id)
  }

  render() {
    return (
      <li>
        <p>
          {this.props.comment.body}
        </p>
        <span
          onClick={this.deleteComment}
          className="close"
        ></span>
      </li>
    )
  }
}

Comment.propTypes = propTypes

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteComment: (id) => {
      dispatch(deleteComment(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)