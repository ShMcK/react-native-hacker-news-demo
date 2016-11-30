// export class Comment {}
// Comment.schema = {
//   name: 'Comment',
//   primaryKey: 'id',
//   properties: {
//     id: 'int',
//     text: 'string',
//     parent: 'int',
//     kids: { type: 'list', objectType: 'Comment' },
//   },
// }

export class Post {}
Post.schema = {
  name: 'Post',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    score: { type: 'int', indexed: true, default: 0 },
    url: 'string',
    type: 'string',
    // text: 'string',
    commentCount: { type: 'int', default: 0 }, // number of comments
    // comments: { type: 'list', objectType: 'Comment' },  // comment ids
  },
}
