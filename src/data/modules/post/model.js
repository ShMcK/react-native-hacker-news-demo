class Post {}
Post.schema = {
  name: 'Post',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    score: { type: 'int', indexed: true, default: 0 },
    url: 'string',
  },
}

export default Post
