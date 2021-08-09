import React from 'react'
import AddSectionButton from './AddSectionButton'
import Menu from '../containers/SectionMenu'
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'

export default ({
  section,
  index,
  changeSectionNameHandler,
  changeContentHandler,
  addButtonPressHandler,
}) => {

  const sectionUuid = section.sectionUuid
  const versionsList = Object.values(section.versions)

  return <FlatList
    horizontal
    onLongPress
    data={versionsList}
    keyExtractor={item => item.versionUuid}
    renderItem={({ item }) => (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <TextInput
            style={styles.name}
            value={section.name}
            onChangeText={text => changeSectionNameHandler(text)}
          />
          <TextInput
            multiline
            placeholder='What are you thinking?'
            style={styles.editor}
            onChangeText={text => changeContentHandler(item.versionUuid, text)}
            value={item.content}
          />
          <Menu index={index} sectionUuid={sectionUuid} versionUuid={item.versionUuid} />
        </View>
        <AddSectionButton index={index} addButtonPressHandler={addButtonPressHandler} />
      </View>
    )
    }
  />

}

const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
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
    elevation: 4,
    padding: 20,
    margin: 10,
    marginBottom: 24
  },
  editor: {
    padding: 10,
    borderRadius: 8,
    fontSize: 18,
  },
  name: {
    fontSize: 15,
    fontWeight: '700'
  }
})