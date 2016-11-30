/** 
 * Post
 * 
 * load Posts
 * add Post
 * voteUp Post
 * sort Posts
 * add Post Comment
 * 
 * @flow
 */

// fetch polyfill that works with node tests
import fetch from 'isomorphic-fetch'
import { POSTS_LOAD } from '../../actions'

export const postsLoad = () => dispatch => {
  // HackerNews API docs: https://github.com/HackerNews/API
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(data => data.json())
    .then((postIds: number[]) => {
      // TODO: figure out how to limit Firebase queries
      const posts = postIds.split(0, 10)
      dispatch({ type: POSTS_LOAD, payload: { posts } })
    })
}

const reducer = (state = {}, action) => {
  switch (action.type) {

    case POSTS_LOAD:
      return action.payload.posts
      
    default:
      return state
  }
}

export default reducer
