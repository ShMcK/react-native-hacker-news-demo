/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation'
import Router from './router'
import { Provider } from 'react-redux'

// load Redux
// TODO: setup react-redux Provider to connect components
import store from './data/store'
import init from './data/init'

init()

export default class HackerNews extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute={Router.getRoute('posts')} />
        </NavigationProvider>
      </Provider>
    )
  }
}
