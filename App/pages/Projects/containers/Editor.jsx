import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeVersionContent, changeSectionName, getCurrentProject, addSection } from '../../../state/projects'
import uuid from 'react-native-uuid'
import EditorView from '../components/Editor'

export default () => {
  const dispatch = useDispatch()

  const project = useSelector(getCurrentProject)
  const projectUuid = project.projectUuid
  const sectionList = project.sectionsOrder.map(uuid => project.sections[uuid])

  const changeContentHandler = (sectionUuid, versionUuid, content) => dispatch(changeVersionContent({
    projectUuid,
    sectionUuid,
    versionUuid,
    content
  }))

  const changeSectionNameHandler = (sectionUuid, name) => dispatch(changeSectionName({
    projectUuid,
    sectionUuid,
    name
  }))

  const addButtonPressHandler = index => dispatch(addSection({
    index,
    newSectionUuid: `section.${uuid.v4()}`,
    versionUuid: `version.${uuid.v4()}`,
    projectUuid
  }))

  return (
    <EditorView
      sectionList={sectionList}
      addButtonPressHandler={addButtonPressHandler}
      changeContentHandler={changeContentHandler}
      changeSectionNameHandler={changeSectionNameHandler}
    />
  )
}
