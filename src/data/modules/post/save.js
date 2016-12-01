/** 
 * Save posts to the client-side db
 */
import realm from '../../db'

export function savePostById(id: number) {

  // fetch post data from Hacker News API
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(data => data.json())
    .then((post) => {

      const { id, title, score, url, descendants, type } = post

      // write post to client db if new id
      realm.write(() => {
        // save to client db
        realm.create('Post', {
          id, title, score, url,
          commentCount: descendants || 0, // occassionally undefined
          type,
          // text, 
          // comments, 
        }, true) // overwrite old data
      })

    }).catch((err) => {
      console.log(err)
    })
}