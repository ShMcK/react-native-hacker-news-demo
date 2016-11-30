import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'

class PostList extends Component {
  render() {
    console.log(this.props.posts)
    const keys = Object.keys(this.props.posts)
    return (
      <View style={styles.container}>
        <Text>PostList</Text>
        {
          keys.map(id => <Text>{id.toString()}</Text>)
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.post,
})

export default connect(mapStateToProps)(PostList)
