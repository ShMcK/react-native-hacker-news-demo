/**
 * Update posts in client-side db
 */

import realm from '../../db'

export function updatePostById(id: number, obj) {

  realm.write(() => {

    const update = Object.assign(obj, { id })

    console.log(update.score)

    // save to client db
    realm.create('Post', update, true) // overwrite old data

  })
}