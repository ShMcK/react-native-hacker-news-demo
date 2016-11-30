import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'
import Router from '../../router'
import { withNavigation } from '@exponent/ex-navigation';

@withNavigation
class Post extends Component {
  routeToAuth() {
    this.props.navigator.push(Router.getRoute('auth'))
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.brand}>
          <View style={styles.logo} />
          <Text style={styles.title}>Hacker News</Text>
        </View>

        <TouchableHighlight style={styles.auth} onPress={() => this.routeToAuth()}>
          <Text>Login</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

export default Post
