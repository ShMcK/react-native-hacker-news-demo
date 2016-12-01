import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
// import { connect } from 'react-redux'
import styles from './styles'
import Brand from '../../components/Brand'

class AuthScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Login',
      backgroundColor: 'lightgrey',
    },
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>
          <Brand />
        </View>

        <View style={[styles.card, styles.shadow]}>

          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder='email'
              onChangeText={email => this.setState({ email })}
              value={this.state.email} />
          </View>
          
          <View style={styles.divider} />

          <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder='password'
            onChangeText={password => this.setState({ password })}
            value={this.state.password} />
          </View>

          <TouchableHighlight style={[styles.submit, styles.shadow]}>
            <Text style={styles.submitText}>Login</Text>
          </TouchableHighlight>

        </View>
      </View>
    )
  }
}

export default AuthScreen
