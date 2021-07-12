import React from 'react'
import { EditorView } from './EditorView'
import { useRoute } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { changeContent as ideaChangeContent, getCurrentIdea } from '../../state/ideas'
import { changeSectionContent, changeSectionName, getCurrentProject } from '../../state/projects'

export const EditorContainer = (props) => {
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
    let temp = []
    data = useSelector(getCurrentProject)
    if (data.sectionsOrder) {
      data.sectionsOrder.forEach(uuid => {
        temp.push(data.sections[uuid])
      })
      data = temp
    } else {
      data = Array.from(Object.values(data.sections))
    }
    changeContentHandler = (sectionUuid, content) => {
      dispatch(changeSectionContent({ projectUuid: route.params.uuid, sectionUuid, content }))
    }
    changeSectionNameHandler = (sectionUuid, name) => {
      dispatch(changeSectionName({ projectUuid: route.params.uuid, sectionUuid, name }))
    }
    hasName = true
  }
  return <EditorView
    type={route.params.type}
    hasName={hasName}
    data={data}
    projectUuid={route.params.uuid}
    changeContentHandler={changeContentHandler}
    changeSectionNameHandler={changeSectionNameHandler}
    {...props}
  />
}