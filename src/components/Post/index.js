import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

class Post extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
  }
  render() {
    return (
      <View>
        <Text>{ this.props.id.toString() }</Text>
      </View>
    )
  }
}

export default Post
