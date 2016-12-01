import React, { Component, PropTypes } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import styles from './styles'
import Router from '../../router'
import { withNavigation } from '@exponent/ex-navigation';

@withNavigation
class Link extends Component {
  static propTypes = {
    route: PropTypes.string.isRequired,
  }
  routeTo() {
    this.props.navigator.push(Router.getRoute(this.props.route))
  }
  render() {
    return (
      <TouchableHighlight style={styles.auth} onPress={() => this.routeTo()}>
        <Text>Login</Text>
      </TouchableHighlight>
    )
  }
}

export default Link
