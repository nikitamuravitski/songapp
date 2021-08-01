import React from 'react'
import { useEffect, useState } from 'react'
import { updateRecentIdeasList, removeIdea, setCurrentIdeaUuid } from '../../../state/ideas'
import { removeIdeaFromWorld } from '../../../state/worlds'
import { View, StyleSheet, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'

const useChangeContent = (text) => {
  const [content, setContent] = useState('')
  const contentRef = useRef('')
  setContent(text)
  contentRef.current = content
}
export default ({
  changeContentHandler,
  changeNameHandler,
  idea,
  ideaUuid,
  worldUuid
}) => {

  const dispatch = useDispatch()
  const [content, setStateContent] = useState('')
  const [name, setStateName] = useState('')
  const nameRef = useRef('')
  const contentRef = useRef('')
  const setName = (text) => {
    nameRef.current = text
    setStateName(text)
  }
  const setContent = (text) => {
    contentRef.current = text
    setStateContent(text)
  }


  useEffect(() => {
    setName(idea.name)
    setContent(idea.content)
    return () => {
      changeContentHandler(contentRef.current)
      changeNameHandler(nameRef.current)
      if (contentRef.current) {
        dispatch(updateRecentIdeasList(ideaUuid))
      }
      else {

        dispatch(removeIdea({ ideaUuid, worldUuid }))
        dispatch(removeIdeaFromWorld({ ideaUuid, worldUuid }))
      }
      dispatch(setCurrentIdeaUuid(null))
    }
  }, [])

  return <View>
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        multiline
        placeholder='What are you thinking?'
        style={styles.editor}
        onChangeText={text => setContent(text)}
        value={content}
      />
    </View>
  </View>
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
