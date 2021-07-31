import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'

export default () => {
  return <View style={styles.container}>
    <Text>No ideas yet</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,

    elevation: 4,
    padding: 20,
    margin: 10,
    marginBottom: 24
  }
})