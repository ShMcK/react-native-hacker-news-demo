import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import styles from './styles'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }
  submit() {
    this.setState({ text: '' })
  }
  render() {
    return (
        <View style={styles.commentFormContainer}>
          <TextInput
            style={[styles.commentFormInput, styles.shadow]}
            onChange={text => this.setState({ text })}
            value={this.state.text}
            multiline={true}
            autoCorrect={true} />
          <TouchableHighlight
            style={[styles.commentFormSubmit, styles.shadow]}
            onPress={() => this.submit()}>
            <Text style={styles.commentFormSubmitText}>Send</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

export default CommentForm
