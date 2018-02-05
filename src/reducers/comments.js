import swal from 'sweetalert'

function comments (state = [], action) {

  switch (action.type) {

    case 'DELETE_COMMENT_SUCCESS':
      swal("Comment deleted!", "You deleted a comment!", "success")
      return state.filter(comment => comment.id !== action.id)
        
    case 'ADD_COMMENT_SUCCESS':
      swal("Comment added!", "You added a comment!", "success")
      return [
        action.comment,
        ...state
      ]
        
    case 'FETCH_COMMENTS_SUCCESS':
      return action.comments.reverse()
    
    default:
      return state
  }
}

export default comments