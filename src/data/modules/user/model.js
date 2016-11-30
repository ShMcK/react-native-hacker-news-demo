class User {}
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: { type: 'number' },
    username: 'string',
    email: 'string',
  },
}

export default User
