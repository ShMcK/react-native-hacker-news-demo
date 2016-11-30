import Realm from 'realm'
import Post from './modules/post'

const realm = new Realm({
  schema: [ Post ],
})

export default realm
