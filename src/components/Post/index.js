import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import styles from './styles'

class Post extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      url: PropTypes.string,
      descendants: PropTypes.number.isRequired,
    }),
    voteUp: PropTypes.func.isRequired,
    showComments: PropTypes.func.isRequired,
  }
  render() {
    const { title, score, url, descendants, voteUp, showComments } = this.props.post

    return (
      <View style={styles.container}>

        <View style={styles.scoreContainer}>
          <View style={styles.group}>
            <TouchableHighlight style={styles.scoreButton} onPress={voteUp}>
              <Text>▲</Text>
            </TouchableHighlight>
            <Text style={styles.score} numberOfLines={1}>{score}</Text>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          {url ? <Text style={styles.link} numberOfLines={1}>{url}</Text> : null}
        </View>

        <TouchableHighlight style={styles.commentContainer} onPress={showComments}>
          <View style={styles.group}>
            <Icon name='comment' style={styles.commentIcon} />
            <Text style={styles.commentCount} numberOfLines={1}>1200</Text>
          </View>
        </TouchableHighlight>


      </View>
    )
  }
}

export default Post
