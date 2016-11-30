/** 
 * Init actions
 * 
 * async actions to run on init
 */
import store from '../store'
import { postsLoad } from './modules/post'

store.dispatch(postsLoad())