import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import realm from '../../data/db'
import Brand from '../../components/Brand'
import Post from '../../components/Post'
import Link from '../../components/Link'
import { postVote } from '../../data/modules/post'

class PostsScreen extends Component {
  static route = {
    navigationBar: {
      renderLeft: () => <Brand />,
      renderRight: () => <View style={styles.link}><Link route='auth' /></View>,
      backgroundColor: 'lightgrey',
    },
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.postContainer}>
          {this.props.posts.map((post, i) => (
            <Post
              key={post.id}
              post={post}
              voteUp={() => this.props.vote(post.id)}
              />
          ))}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: realm.objects('Post').sorted('score', { ascending: false }).slice(0, 10),
})

const mapDispatchToProps = dispatch => ({
  vote(id) {
    dispatch(postVote(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen)
