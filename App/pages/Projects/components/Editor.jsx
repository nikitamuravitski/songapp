import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native'
import Section from './Section'

export default ({
  changeContentHandler,
  changeSectionNameHandler,
  sectionList,
  addButtonPressHandler
}) => {
  return <FlatList
    data={sectionList}
    keyExtractor={item => item.sectionUuid}
    renderItem={({ item, index }) => {
      return <Section
        index={index}
        section={item}
        changeSectionNameHandler={changeSectionNameHandler}
        changeContentHandler={changeContentHandler}
        addButtonPressHandler={addButtonPressHandler}
      />

    }}
  />


  {/* <View><Text>Her</Text></View> */ }
}
