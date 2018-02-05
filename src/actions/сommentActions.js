import axios from 'axios'

export function addComment (text, postId) {
  return dispatch => {
    const req = axios.post(`http://localhost:3001/comments`, {
      id: 0,
      postId,
      body: text
    })
    return req.then(
      response => dispatch(addCommentSuccess(response.data)),
      err => console.log(err)
    )
  }
}

export function deleteComment(id) {
  return dispatch => {
    const req = axios.delete(`http://localhost:3001/comments/${id}`)
    return req.then(
      response => dispatch(deleteCommentSuccess(id)),
      err => console.log(err)
    )
  }
}

export function fetchComments () {
  return dispatch => {
    const req = axios.get(`http://localhost:3001/comments`)
    return req.then(
      response => dispatch(fetchCommentsSuccess(response.data)),
      err => console.log(err)
    )
  }
}

function deleteCommentSuccess (id) {
  return {
    type: 'DELETE_COMMENT_SUCCESS',
    id
  }
}

function addCommentSuccess (comment) {
  return {
    type: 'ADD_COMMENT_SUCCESS',
    comment
  }
}

function fetchCommentsSuccess (comments) {
  return {
    type: 'FETCH_COMMENTS_SUCCESS',
    comments
  }
}