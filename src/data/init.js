/** 
 * Init actions
 * 
 * async actions to run on init
 */
import store from './store'
import './db'
import { postsLoad } from './modules/post'

export default function init() {
  store.dispatch(postsLoad())
}