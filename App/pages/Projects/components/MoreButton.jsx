import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

export default ({ }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => null}
  >
    <Image source={require('../../../assets/more.png')} style={{ width: 16, height: 16 }} />
  </TouchableOpacity>
)
const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    right: 10,
    top: 15,
    height: 14,
    width: 14
  }
})