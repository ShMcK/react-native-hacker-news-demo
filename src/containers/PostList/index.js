import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import realm from '../../data/db'

import Header from '../../components/Header'
import Post from '../../components/Post'

class PostList extends Component {
  componentWillMount() {
    this.posts = realm.objects('Post').sorted('score', { ascending: false }).slice(0, 10)
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <View style={styles.postContainer}>
          {this.posts.map(post => {
            return <Post
              key={post.id}
              post={post}
              voteUp={() => { } }
              showComments={() => { } }
              />
          })}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.post,
})

export default connect(mapStateToProps)(PostList)
