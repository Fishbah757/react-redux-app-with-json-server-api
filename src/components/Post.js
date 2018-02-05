import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deletePost, editPost, editPostStart, editPostCancel } from '../actions/postActions'
import swal from 'sweetalert'

import CommentList from './CommentList'

const propTypes = {
  post: PropTypes.object.isRequired,
  ind: PropTypes.number.isRequired
}

class Post extends Component {

  constructor (props) {
    super(props)

    this.closeEditForm = this.closeEditForm.bind(this)
    this.startEditForm = this.startEditForm.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.editPost = this.editPost.bind(this)
  }

  editPost () {
    if (this.titleInp.value !== '') {
      this.props.onEditPost(this.titleInp.value, this.bodyInp.value, this.props.post.id)
    } else {
      swal("Is there a title of the post?", 'You must to type something to the title input!', "warning")
    }
  }

  deletePost () {
    this.props.onDeletePost(this.props.post.id)
  }

  startEditForm () {
    this.props.onEditStart(this.props.post.id)
  }

  closeEditForm () {
    this.props.onEditCancel(this.props.post.id)
  }

  postEdit () {
    return (
      <li>
        <input
          type="text"
          defaultValue={this.props.post.title}
          ref={inp => this.titleInp = inp}
        />
        <textarea
          defaultValue={this.props.post.body}
          ref={inp => this.bodyInp = inp}
        />
        <div className="button-container">
          <button onClick={this.editPost}>
            Edit
          </button>
          <button onClick={this.closeEditForm}>
            Cancel
          </button>
        </div>
        <CommentList postId={this.props.post.id} />
      </li>
    )
  }

  postDefault () {
    return (
      <li>
        <div>
          <h1>
            {this.props.post.title}
          </h1>
          <p>
            {this.props.post.body}
          </p>
        </div>
        <div className="button-container">
          <button onClick={this.startEditForm}>
            Edit
          </button>
          <button onClick={this.deletePost}>
            Delete
          </button>
        </div>
        <CommentList postId={this.props.post.id} />
      </li>
    )
  }

  render() {
    return this.props.allPosts[this.props.ind].isEditing ? this.postEdit() : this.postDefault()
  }
}

Post.propTypes = propTypes

function mapStateToProps(state) {
  return {
    allPosts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDeletePost: (id) => {
      dispatch(deletePost(id))
    },
    onEditPost: (title, body, id) => {
      dispatch(editPost(title, body, id))
    },
    onEditStart: (id) => {
      dispatch(editPostStart(id))
    },
    onEditCancel: (id) => {
      dispatch(editPostCancel(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)