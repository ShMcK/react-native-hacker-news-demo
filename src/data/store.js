/** 
 * Redux Store
 * 
 * handles:
 * - application state
 * - application events that modify state
 */
import { createStore, applyMiddleware } from 'redux'
import { createNavigationEnabledStore} from '@exponent/ex-navigation'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middlewareList = [
  thunkMiddleware
]

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
})

const store = createStoreWithNavigation(rootReducer, initialState, applyMiddleware(...middlewareList))

export default store
