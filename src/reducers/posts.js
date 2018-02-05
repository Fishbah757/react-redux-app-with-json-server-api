import swal from 'sweetalert'

function posts (state = [], action) {

  switch (action.type) {
        
    case 'ADD_POST_SUCCESS':
      swal("Post added!", "You added a post!", "success")
      action.post.isEditing = false
      return [
        action.post,
        ...state
      ]
        
    case 'EDIT_POST_CANCEL':
      return state.map(post => {
        if (post.id === action.id) {
          post.isEditing = false
          return post
        } else {
          return post
        }
      })
        
    case 'EDIT_POST_START':
      return state.map(post => {
        if (post.id === action.id) {
          post.isEditing = true
          return post
        } else {
          return post
        }
      })
        
    case 'EDIT_POST_SUCCESS':
      swal("Post edited!", "You edited a post!", "success")
      return state.map(post => {
        if (post.id === action.post.id) {
          post.title = action.post.title
          post.body = action.post.body
          post.isEditing = false
          return post
        } else {
          return post
        }
      })
        
    case 'DELETE_POST_SUCCESS':
      swal("Post deleted!", "You deleted a post!", "success")
      return state.filter(post => post.id !== action.id)
        
    case 'FETCH_POSTS_SUCCESS':
      return action.posts.map(post => {
        post.isEditing = false
        return post
      }).reverse()
        
      default:
        return state
    }
}

export default posts