/** 
 * Redux Reducer
 * 
 * combines redux reducers that modify app state
 * found in "modules" directory
 */
import { combineReducers } from 'redux'
import { NavigationReducer } from '@exponent/ex-navigation'
import { default as post } from './modules/post'
import { default as user } from './modules/user'

const rootReducer = combineReducers({
  post,
  user,
  navigation: NavigationReducer,
})

export default rootReducer
