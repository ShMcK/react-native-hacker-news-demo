import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import realm from '../../data/db'

class PostList extends Component {
  componentWillMount() {
    this.posts = realm.objects('Post').sorted('score').slice(0, 10)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>PostList</Text>
        {
          this.posts.map(({title}) => <Text>{title}</Text>)
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.post,
})

export default connect(mapStateToProps)(PostList)
