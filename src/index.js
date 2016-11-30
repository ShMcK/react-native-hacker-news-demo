/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import PostList from './containers/PostList'

// load Redux
// TODO: setup react-redux Provider to connect components
import store from './data/store'
import init from './data/init'

init()

export default class HackerNews extends Component {
  render() {
    return (
      <Provider store={store}>
        <PostList />
      </Provider>
    )
  }
}

