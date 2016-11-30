import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

class Post extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.brand}>
          <View style={styles.logo} />
          <Text style={styles.title}>Hacker News</Text>
        </View>

        <TouchableHighlight style={styles.auth}>
          <Text>Login</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

export default Post
