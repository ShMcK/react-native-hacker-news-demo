/** 
 * Redux Reducer
 * 
 * combines redux reducers that modify app state
 * found in "modules" directory
 */
import { combineReducers } from 'redux'
import { default as post } from './modules/post'
import { default as user } from './modules/user'

const rootReducer = combineReducers({
  post,
  user,
})

export default rootReducer
