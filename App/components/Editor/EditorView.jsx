import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { AddSectionButton } from './components/AddSectionButton'

export const EditorView = ({
  hasName,
  changeContentHandler,
  changeSectionNameHandler,
  data,
  projectUuid,
  type
}) => {
  // this is for rendering Project Editor
  if (type === 'PROJECT') {
    return <View>
      <FlatList
        data={data}
        // ItemSeparatorComponent={() => }
        keyExtractor={item => item.sectionUuid}
        renderItem={({ item, index }) => {
          return <View style={styles.container}>
            <TextInput
              value={item.name}
              onChangeText={(text) => {
                changeSectionNameHandler(item.sectionUuid, text)
              }
              }
            />
            <TextInput
              multiline
              placeholder='What are you thinking?'
              style={styles.editor}
              onChangeText={(text) => {
                changeContentHandler(item.sectionUuid, text)
              }
              }
            // value isn`t specified explicitly
            //Text input has no lineHeight Style property
            >
              {/* So this workaround is working */}
              <Text>{item.content}</Text>
            </TextInput>
            <AddSectionButton index={index} projectUuid={projectUuid} />
          </View>
        }}
      />
    </View>
  }
  if (type === 'IDEA') {
    return <View style={styles.container}>
      <TextInput
        multiline
        placeholder='What are you thinking?'
        style={styles.editor}
        onChangeText={(text, e) => {
          changeContentHandler(text)
        }}
      // value isn`t specified explicitly
      //Text input has no lineHeight Style property
      >
        {/* So this workaround is working */}
        <Text>{data.content}</Text>
      </TextInput>
    </View>
  }

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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,

    elevation: 4,
    padding: 20,
    margin: 10,
    marginBottom: 24
  }
})