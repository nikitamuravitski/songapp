import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-native-uuid'

import Menu from '../components/Menu'
import {
  getCurrentProjectUuid,
  addVersion,
  copyVersion,
  copySection,
  removeVersion,
  removeSection
} from '../../../state/projects'

export default ({ index, versionUuid, sectionUuid }) => {
  const projectUuid = useSelector(getCurrentProjectUuid)

  const dispatch = useDispatch()
  const copyVersionHandler = () => {
    const newVersionUuid = `version.${uuid.v4()}`
    dispatch(copyVersion({ projectUuid, sectionUuid, versionUuid, newVersionUuid }))
  }
  const addVersionHandler = () => {
    const newVersionUuid = `version.${uuid.v4()}`
    dispatch(addVersion({ projectUuid, sectionUuid, versionUuid: newVersionUuid }))
  }
  const copySectionHandler = () => {
    const newSectionUuid = `section.${uuid.v4()}`
    dispatch(copySection({ projectUuid, sectionUuid, index, newSectionUuid }))
  }
  const removeVersionHandler = () => {
    dispatch(removeVersion({ projectUuid, sectionUuid, versionUuid }))
  }
  const removeSectionHandler = () => {
    dispatch(removeSection({ projectUuid, sectionUuid }))
  }
  const options = [
    {
      label: 'Copy version',
      callback: () => copyVersionHandler()
    },
    {
      label: 'Add version',
      callback: () => addVersionHandler()
    },
    {
      label: 'Remove version',
      callback: () => removeVersionHandler()
    },
    {
      label: 'Remove section',
      callback: () => removeSectionHandler()
    },
    {
      label: 'Copy section',
      callback: () => copySectionHandler()
    },
  ]
  return <Menu options={options} />
}