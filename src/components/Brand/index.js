import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'


const Brand = () => (
  <View style={styles.brand}>
    <View style={styles.logo} />
    <Text style={styles.title}>Hacker News</Text>
  </View>
)

export default Brand
