import { combineReducers } from 'redux'
import comments from './comments'
import posts from './posts'

export const reducers = combineReducers({
  comments,
  posts
})