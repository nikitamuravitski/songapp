import React from 'react'
import { View, Text } from 'react-native'
import { EditorView } from './EditorView'
import { useRoute } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { changeContent as ideaChangeContent, getCurrentIdea } from '../../state/ideas'
import { changeSectionContent, changeSectionName, getCurrentProject } from '../../state/projects'

export const EditorContainer = (props) => {
  return <View><Text>123</Text></View>
  const dispatch = useDispatch()

  const route = useRoute()
  let hasName
  let data
  let changeContentHandler
  let changeSectionNameHandler
  // configuring what type of editor to open
  if (route.params.type === 'IDEA') {
    data = useSelector(getCurrentIdea)
    changeContentHandler = (content) => {
      dispatch(ideaChangeContent({ uuid: route.params.uuid, content }))
    }
    hasName = false
  }
  if (route.params.type === 'PROJECT') {

  }
  return (
    <EditorView
      type={route.params.type}
      hasName={hasName}
      data={data}
      projectUuid={route.params.uuid}
      changeContentHandler={changeContentHandler}
      changeSectionNameHandler={changeSectionNameHandler}
      {...props}
    />
  )
}
