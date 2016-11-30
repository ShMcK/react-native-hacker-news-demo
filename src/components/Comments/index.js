import React, { Component, PropTypes } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import styles from './styles'
import Comment from './Comment'
import CommentForm from './CommentForm'

class Comments extends Component {
  // static propTypes = {
  //   comments: PropTypes.arrayOf({
  //     author: PropTypes.string.isRequired,
  //     content: PropTypes.string.isRequired,
  //     imageUrl: PropTypes.string,
  //   }),
  // }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.commentList}>
          <Comment />
        </View>

        <CommentForm />

      </View>
    )
  }
}

export default Comments
