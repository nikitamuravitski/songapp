import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const PaperView = ({
  uuid,
  content,
  name,
  pressHandler
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => pressHandler(uuid)} style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,

    elevation: 4,

    padding: 20,
    margin: 10
  },
  name: {
    fontSize: 19,
    marginBottom: 4
  },
  content: {
    color: '#686868',
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 6
  }
})
