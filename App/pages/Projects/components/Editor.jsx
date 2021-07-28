import React from 'react'

import { FlatList, View, StyleSheet, TextInput } from 'react-native'

import AddSectionButton from './AddSectionButton'

export default ({
  changeContentHandler,
  changeSectionNameHandler,
  sectionList,
  addButtonPressHandler
}) => (
  <View>
    <FlatList
      data={sectionList}
      keyExtractor={item => item.sectionUuid}
      renderItem={({ item, index }) => (
        <View style={styles.container}>
          <TextInput
            value={item.name}
            onChangeText={text => changeSectionNameHandler(item.sectionUuid, text)}
          />
          <TextInput
            multiline
            placeholder='What are you thinking?'
            style={styles.editor}
            onChangeText={text => changeContentHandler(item.sectionUuid, text)}
            value={item.content}
          />
          <AddSectionButton
            index={index}
            addButtonPressHandler={addButtonPressHandler}
          />
        </View>
      )}
    />
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