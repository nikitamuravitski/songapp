import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProject } from '../../../state/projects'
import EditorView from '../components/Editor'

export default () => {
  const dispatch = useDispatch()
  const project = useSelector(getCurrentProject)
  const sectionUuidList = project.sectionsOrder

  return (
    <EditorView
      sectionUuidList={sectionUuidList}
    />
  )
}
