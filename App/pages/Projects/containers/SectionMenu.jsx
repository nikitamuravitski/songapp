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
  const newSectionUuid = `section.${uuid.v4()}`
  const dispatch = useDispatch()
  const copyVersionHandler = () => {
    dispatch(copyVersion({ projectUuid, sectionUuid, versionUuid, newVersionUuid }))
  }
  const addVersionHandler = () => {
    dispatch(addVersion({ projectUuid, sectionUuid, versionUuid: newVersionUuid }))
  }
  const copySectionHandler = () => {
    dispatch(copySection({ projectUuid, sectionUuid, index, newSectionUuid }))
  }
  return <Menu
    addVersionHandler={addVersionHandler}
    copyVersionHandler={copyVersionHandler}
    copySectionHandler={copySectionHandler}
  />
}