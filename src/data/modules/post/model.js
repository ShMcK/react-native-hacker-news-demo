class Post {}
Post.schema = {
  name: 'Post',
  primaryKey: 'id',
  properties: {
    id: 'number',
    title: 'string',
    score: { type: 'number', indexed: true },
    url: 'string',
  },
}

export default Post
