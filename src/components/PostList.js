import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import '../css/postList.css'

import Post from './Post'

class PostList extends Component {

  componentDidMount () {
    this.props.getPosts()
  }

  render() {
    return (
      <ul>
        {this.props.allPosts.map((post, index) => {
          return (
            <Post 
              key={post.id}
              post={post}
              ind={index}
            />
          )
        })}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    allPosts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPosts: () => {
      dispatch(fetchPosts())
    }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PostList)