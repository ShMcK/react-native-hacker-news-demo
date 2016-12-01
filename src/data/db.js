import Realm from 'realm'
import { Post } from './modules/post/model'
import { User } from './modules/user/model'

const realm = new Realm({
  schema: [ Post, User ],
})

export default realm
