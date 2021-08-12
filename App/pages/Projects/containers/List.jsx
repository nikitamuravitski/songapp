import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { getCurrentProjectName, getProjectsData, setCurrentProjectUuid } from '../../../state/projects'
import { setCurrentWorldUuid } from '../../../state/worlds'

import ListView from '../components/List'

export default ({ recent }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const projects = useSelector(getProjectsData)

  const pressHandler = projectUuid => {
    const project = projects[projectUuid]
    dispatch(setCurrentProjectUuid(projectUuid))
    dispatch(setCurrentWorldUuid(project.worldUuid))
    navigation.push('Project', { screen: 'Project Page', name: project.name })
  }

  return (
    <ListView
      name={recent
        ? 'Recent Projects'
        : null}
      projects={recent
        ? Object.values(projects)
        : Object.values(projects).slice(0, 3)}
      pressHandler={pressHandler}
    />
  )
}
