import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

class Comment extends Component {
  // static propTypes = {
  //   imageUrl: PropTypes.string,
  //   author: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  // }
  render() {
    return (
      <View style={styles.comment}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentAuthor}>Author</Text>
          <Text style={styles.contentText}>Content</Text>
        </View>
      </View>
    )
  }
}

export default Comment
