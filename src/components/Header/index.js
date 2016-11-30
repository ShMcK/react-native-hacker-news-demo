import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo} />
        <Text style={styles.title}>Hacker News</Text>
      </View>
    )
  }
}

export default Post
