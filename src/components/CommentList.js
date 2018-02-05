import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments, addComment } from '../actions/сommentActions'
import PropTypes from 'prop-types'
import Comment from './Comment'
import swal from 'sweetalert'

import '../css/commentList.css'

const propTypes = {
  postId: PropTypes.number.isRequired
}

class CommentList extends Component {

  constructor(props) {
    super(props)

    this.addComment = this.addComment.bind(this)
  }

  componentDidMount() {
    this.props.getComments()
  }

  filteredComments () {
    return this.props.allComments.filter(el =>
      el.postId === this.props.postId
    )
  }

  addComment () {
    if (this.commentInput.value !== '') {
      this.props.onAddComment(this.commentInput.value, this.props.postId)
      this.commentInput.value = ''
    } else {
      swal("Did you type any text?", "Type something to the input to add the comment!", "warning")
    }
  }

  render() {
    return (
      <div className="comment-container">
        <div className="comment-inputs">
          <input 
            type="text"
            placeholder="Type your comment..."
            ref={inp => this.commentInput = inp}
          />
          <input 
            type="submit"
            value="Сomment"
            onClick={this.addComment}
          />
        </div>
        <ul>
          {this.filteredComments().map((comment) => {
            return (
              <Comment 
                key={comment.id} 
                comment={comment}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

CommentList.propTypes = propTypes

function mapStateToProps(state) {
  return {
    allComments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComments: () => {
      dispatch(fetchComments())
    },
    onAddComment: (text, id) => {
      dispatch(addComment(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)