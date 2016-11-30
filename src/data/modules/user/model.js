class User {}
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'int',
    username: 'string',
    email: 'string',
  },
}

export default User