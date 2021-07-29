import React from 'react'

import { FlatList, View, StyleSheet, TextInput } from 'react-native'

import AddSectionButton from './AddSectionButton'
import Section from './Section'

export default ({
  changeContentHandler,
  changeSectionNameHandler,
  sectionList,
  addButtonPressHandler
}) => {
  return <View>
    <FlatList
      data={sectionList}
      keyExtractor={item => item.sectionUuid}
      renderItem={({ item, index }) => (
        < Section
          index={index}
          data={item}
          changeSectionNameHandler={changeSectionNameHandler}
          changeContentHandler={changeContentHandler}
          addButtonPressHandler={addButtonPressHandler}
        />
      )
      }
    />
  </View >
}

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
