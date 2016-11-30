import Realm from 'realm'
import { Post } from './modules/post/model'

const realm = new Realm({
  schema: [ Post ],
})

export default realm
