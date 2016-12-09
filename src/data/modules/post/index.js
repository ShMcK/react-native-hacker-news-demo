/** 
 * Post
 *  
 * @flow
 */

// fetch polyfill that works with node tests
// import fetch from 'isomorphic-fetch'
import { POSTS_LOAD, POST_VOTE } from '../../actions'
import { savePostById } from './save'
import { updatePostById } from './update'
import realm from '../../db'

export const postsLoad = () => dispatch => {
  // HackerNews API docs: https://github.com/HackerNews/API
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(data => data.json())
    .then((postIds: number[]) => {
      // TODO: figure out how to limit Firebase queries
      const posts = postIds.slice(0, 10)
      dispatch({ type: POSTS_LOAD, payload: { posts } })
    })
}

export const postVote = (id) => {
  return { type: POST_VOTE, payload: { id } }
}

const reducer = (state = {}, action) => {
  switch (action.type) {

    case POSTS_LOAD:
      // save to db
      action.payload.posts.forEach(id => savePostById(id))

      return {}

    case POST_VOTE:
      const score = realm.objects('Post').filtered(`id = ${action.payload.id}`)[0].score
      // save to db
      updatePostById(action.payload.id, { score: score + 1 })
      return {}

    default:
      return state
  }
}

export default reducer
