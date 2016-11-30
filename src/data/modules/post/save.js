/** 
 * Save posts to the client-side db
 */
import realm from '../../db'

export function savePostById(id: number) {

  // fetch post data from Hacker News API
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(data => data.json())
    .then((post) => {

      const { id, title, score, url, descendants, text, type } = post

      // write post to client db if new id
      realm.write(() => {

        const idExists = realm.objects('Post').filtered(`id = ${id}`).results === -1

        // add only ids that are unique
        if (!idExists) {

          // arrays must be of objects in Realm
          // const comments = kids.map(k => ({ id: k }))

          // save to client db
          realm.create('Post', {
            id, title, score, url, 
            commentCount: descendants,
            type,
            // text, 
            // comments, 
          })
        }
      })

    }).catch((err) => {
      console.log(err)
    })
}