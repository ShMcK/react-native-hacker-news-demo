import { createRouter } from '@exponent/ex-navigation'
import PostsScreen from '../containers/PostsScreen'
import AuthScreen from '../containers/AuthScreen'
import store from '../data/store'

const Router = createRouter(() => ({
  posts: () => PostsScreen,
  auth: () => AuthScreen,
}))

export default Router