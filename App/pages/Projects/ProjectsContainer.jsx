import React from 'react'
import { ProjectsView } from './ProjectsView'
import { useNavigation } from '@react-navigation/native';
import { getProjectsData, setCurrentProjectUuid } from '../../state/projects'
import { setCurrentWorldUuid } from '../../state/worlds'
import { useDispatch, useSelector } from 'react-redux';

export const ProjectsContainer = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  let data = useSelector(getProjectsData)
  data = Object.values(data)
  const pressHandler = (params) => {
    dispatch(setCurrentProjectUuid({ projectUuid: params.uuid }))
    dispatch(setCurrentWorldUuid({ worldUuid: params.worldUuid }))
    navigation.push('Project', {
      screen: 'Project Page',
      params: { ...params }
    })
  }
  return <ProjectsView data={data} pressHandler={pressHandler} {...props} />
}