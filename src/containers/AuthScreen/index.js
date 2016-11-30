import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import { connect } from 'react-redux'
import styles from './styles'

class AuthScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Login',
    },
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Auth</Text>
      </View>
    )
  }
}

export default AuthScreen
