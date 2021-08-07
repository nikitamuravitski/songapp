import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeVersionContent, changeSectionName, getCurrentProject, addSection } from '../../../state/projects'
import uuid from 'react-native-uuid'
import Section from '../components/Section'
import { Text } from 'react-native'
import { View } from 'react-native'

export default ({
  index,
  sectionUuid
}) => {
  const dispatch = useDispatch()

  const project = useSelector(getCurrentProject)
  const projectUuid = project.projectUuid
  const section = project.sections[sectionUuid]
  const changeContentHandler = (versionUuid, content) => dispatch(changeVersionContent({
    projectUuid,
    sectionUuid,
    versionUuid,
    content
  }))

  const changeSectionNameHandler = (name) => dispatch(changeSectionName({
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

  return <Section
    index={index}
    section={section}
    addButtonPressHandler={addButtonPressHandler}
    changeContentHandler={changeContentHandler}
    changeSectionNameHandler={changeSectionNameHandler}
  />

}
