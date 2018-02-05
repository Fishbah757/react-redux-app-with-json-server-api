import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'
import '../css/form.css'
import swal from 'sweetalert'

class Form extends Component {

  constructor (props) {
    super(props)

    this.addPost = this.addPost.bind(this)
	}

  addPost () {
    if (this.titleInp.value !== '') {
  	  this.props.onAddPost(this.titleInp.value, this.bodyInp.value)
  	  this.bodyInp.value = ''
  	  this.titleInp.value = ''
  	} else {
      swal("Did you type any title?", "Type something to the title input to add the post!", "warning")
    }
  }

  render() {
    return (
      <div className="post-add-form">
        <input 
          type="text"
          ref={inp => this.titleInp = inp}
          placeholder="Type title of your post..."
        />
        <textarea 
          placeholder="Type body of your post..."
          ref={inp => this.bodyInp = inp}
        />
        <button onClick={this.addPost}>
          Add
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    onAddPost: (title, body) => {
      dispatch(addPost(title, body))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)