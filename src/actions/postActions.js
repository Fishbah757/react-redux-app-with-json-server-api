import axios from 'axios'
import swal from 'sweetalert'

export function fetchPosts() {
  return dispatch => {
    const req = axios.get('http://localhost:3001/posts')
    return req.then(
      response => dispatch(fetchPostsSuccess(response.data)),
      err => swal('Check that you started yarn json server!', 'start the yarn json server!', 'error')
    )
  }
}

export function editPost(title, body, id) {
  return dispatch => {
    const req = axios.put(`http://localhost:3001/posts/${id}`, {
      title,
      body
    })
    return req.then(
      response => dispatch(editPostSuccess(response.data)),
      err => swal('Check that you started yarn json server!', 'start the yarn json server!', 'error')
    )
  }
}

export function addPost(title, body) {
  return dispatch => {
    const req = axios.post('http://localhost:3001/posts', {
      id: 0,
      title,
      body
    })
    return req.then(
      response => dispatch(addPostSuccess(response.data)),
      err => swal('Check that you started yarn json server!', 'start the yarn json server!', 'error')
    )
  }
}

export function deletePost(id) {
  return dispatch => {
    const req = axios.delete(`http://localhost:3001/posts/${id}`)
    return req.then(
      response => dispatch(deletePostSuccess(id)),
      err => swal('Check that you started yarn json server!', 'start the yarn json server!', 'error')
    )
  }
}

export function editPostStart (id) {
  return {
    type: 'EDIT_POST_START',
    id
  }
}
export function editPostCancel(id) {
  return {
    type: 'EDIT_POST_CANCEL',
    id
  }
}

function deletePostSuccess(id) {
  return {
    type: 'DELETE_POST_SUCCESS',
    id
  }
}

function addPostSuccess (post) {
  return {
    type: 'ADD_POST_SUCCESS',
    post
  }
}

function editPostSuccess (post) {
  return {
    type: 'EDIT_POST_SUCCESS',
    post
  }
}

function fetchPostsSuccess(posts) {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    posts
  }
}