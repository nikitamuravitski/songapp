import React from 'react'

import { View, StyleSheet, TextInput } from 'react-native'

export default ({
  changeContentHandler,
  changeNameHandler,
  idea
}) => (
  <View>
    <View style={styles.container}>
      <TextInput
        value={idea.name}
        onChangeText={text => changeNameHandler(idea.uuid, text)}
      />
      <TextInput
        multiline
        placeholder='What are you thinking?'
        style={styles.editor}
        onChangeText={text => changeContentHandler(idea.uuid, text)}
        value={idea.content}
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  name: {
    fontWeight: '700'
  },
  editor: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 23
  },
  container: {
    position: 'relative',
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
