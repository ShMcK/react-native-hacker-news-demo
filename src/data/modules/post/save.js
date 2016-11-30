/** 
 * Save posts to the client-side db
 */
import realm from '../../db'

export function savePostById(id: number) {

  // fetch post data from Hacker News API
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(data => data.json())
    .then((post) => {

      const { id, title, score, url } = post

      // write post to client db
      realm.write(() => {
        realm.create('Post', {
          id, title, score, url,
        })
      })

    }).catch((err) => {
      console.log(err)
    })
}