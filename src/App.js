import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/app.css'

import Form from './components/Form'
import PostList from './components/PostList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Add your posts</h1>
        <Form />
        <PostList />
      </div>
    )
  }
}

export default connect()(App)