import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import styles from './styles'
import Comments from '../Comments'

class Post extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      url: PropTypes.string,
      commentCount: PropTypes.number.isRequired,
    }),
    voteUp: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      toggleComments: false,
    }
  }
  showComments() {
    this.setState({ toggleComments: !this.state.toggleComments })
  }
  render() {
    const { title, score, url, commentCount } = this.props.post
    const { voteUp } = this.props

    return (
      <View style={styles.outer}>
        <View style={styles.card}>

          <TouchableHighlight style={styles.scoreContainer} onPress={voteUp}>
            <View style={styles.group}>
              <View style={styles.scoreButton}>
                <Text>▲</Text>
              </View>
              <Text style={styles.score} numberOfLines={1}>{score}</Text>
            </View>
          </TouchableHighlight>

          <View style={styles.mainContainer}>
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
            {url ? <Text style={styles.link} numberOfLines={1}>{url}</Text> : null}
          </View>

          <TouchableHighlight style={styles.commentContainer} onPress={() => this.showComments()}>
            <View style={styles.group}>
              <Icon name='comment' style={styles.commentIcon} />
              <Text style={styles.commentCount} numberOfLines={1}>{commentCount}</Text>
            </View>
          </TouchableHighlight>

        </View>

        {this.state.toggleComments ? <Comments /> : null}

      </View>
    )
  }
}

export default Post
