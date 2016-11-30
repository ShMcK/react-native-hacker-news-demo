/** 
 * Redux Store
 * 
 * handles:
 * - application state
 * - application events that modify state
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middlewareList = [
  thunkMiddleware
]

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewareList))

export default store
