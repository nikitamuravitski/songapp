import React from 'react'
import { StyleSheet, Text } from 'react-native'
import AddSectionButton from './AddSectionButton'
import { ScrollView, TextInput } from 'react-native'
import { View } from 'react-native'

export default ({
  data,
  index,
  changeSectionNameHandler,
  changeContentHandler,
  addButtonPressHandler
}) => {
  const sectionUuid = data.sectionUuid
  const versionsList = Object.values(data.versions).map(version => <TextInput
    multiline
    placeholder='What are you thinking?'
    style={styles.editor}
    onChangeText={text => { console.log(version); changeContentHandler(sectionUuid, version.versionUuid, text) }}
    value={version.content}
  />)
  return <View style={styles.container}>
    <TextInput
      value={data.name}
      onChangeText={text => changeSectionNameHandler(data.sectionUuid, text)}
    />
    <ScrollView horizontal style={styles.scroll} >
      {versionsList}
    </ScrollView>

    <AddSectionButton index={index} addButtonPressHandler={addButtonPressHandler} />
  </View>
}

const styles = StyleSheet.create({
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
  },
  scroll: {
    position: 'relative',
    display: 'flex',
    flex: 1
  },
  editor: {
    alignSelf: 'stretch',
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 23
  }
})