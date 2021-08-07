import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'react-native-uuid'

import Menu from '../components/Menu'
import {
  getCurrentProjectUuid,
  addVersion,
  copyVersion,
  copySection
} from '../../../state/projects'

export default ({ index, versionUuid, sectionUuid }) => {
  const projectUuid = useSelector(getCurrentProjectUuid)
  const newVersionUuid = `version.${uuid.v4()}`

  const dispatch = useDispatch()
  const copyVersionHandler = () => {
    const newSectionUuid = `section.${uuid.v4()}`
    dispatch(copyVersion({ projectUuid, sectionUuid, versionUuid, newVersionUuid }))
  }
  const addVersionHandler = () => {
    const newSectionUuid = `section.${uuid.v4()}`
    dispatch(addVersion({ projectUuid, sectionUuid, versionUuid: newVersionUuid }))
  }
  const copySectionHandler = () => {
    const newSectionUuid = `section.${uuid.v4()}`
    dispatch(copySection({ projectUuid, sectionUuid, index, newSectionUuid }))
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
      label: 'Copy section',
      callback: () => copySectionHandler()
    },
  ]
  return <Menu options={options} />
}