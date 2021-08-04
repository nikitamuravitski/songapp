import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import AddSectionButton from './AddSectionButton'
import MoreButton from './MoreButton'
import {
  TextInput,
  FlatList
} from 'react-native'
import { View } from 'react-native'

export default ({
  section,
  index,
  changeSectionNameHandler,
  changeContentHandler,
  addButtonPressHandler
}) => {

  const sectionUuid = section.sectionUuid
  const versionsList = Object.values(section.versions)
  return <FlatList
    horizontal
    data={versionsList}
    keyExtractor={item => item.versionUuid}
    renderItem={({ item }) => (
      <View style={styles.container}>
        <TextInput
          style={styles.name}
          value={section.name}
          onChangeText={text => changeSectionNameHandler(sectionUuid, text)}
        />
        <TextInput
          multiline
          placeholder='What are you thinking?'
          style={styles.editor}
          onChangeText={text => changeContentHandler(sectionUuid, item.versionUuid, text)}
          value={item.content}
        />
        <AddSectionButton index={index} addButtonPressHandler={addButtonPressHandler} />
        <MoreButton />
      </View>
    )
    }
  />
}

const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({

  container: {
    display: 'flex',
    width: windowWidth - 20,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    zIndex: 1000,
    elevation: 4,
    padding: 20,
    margin: 10,
    marginBottom: 24
  },
  editor: {
    alignSelf: 'stretch',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  name: {
    flex: 1,
    fontWeight: '600'
  }
})