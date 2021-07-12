import React from 'react'
import { AddButtonView } from './AddButtonView'
import { useNavigation } from '@react-navigation/native'
import { createIdea, setCurrentIdeaUuid } from '../../state/ideas'
import { createProject, setCurrentProjectUuid } from '../../state/projects'
import { addIdeaToWorld, createWorld, setCurrentWorldUuid } from '../../state/worlds'
import { useDispatch, useSelector } from 'react-redux'
import 'react-native-get-random-values'
import uuid from 'react-native-uuid'

export const AddButtonContainer = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const projectData = useSelector(state => state.Projects.projectsData)
  let pressHandler
  if (props.buttonTitle === 'Add Idea') {
    pressHandler = () => {
      const ideaUuid = `idea.${uuid.v4()}`
      if (props.projectUuid) {
        const worldUuid = projectData[props.projectUuid].worldUuid
        dispatch(setCurrentIdeaUuid({ ideaUuid: ideaUuid }))
        dispatch(createIdea({ uuid: ideaUuid, worldUuid: worldUuid }))
        dispatch(addIdeaToWorld({ ideaUuid: ideaUuid, worldUuid: worldUuid }))
      } else {
        dispatch(setCurrentIdeaUuid({ ideaUuid: ideaUuid }))
        dispatch(createIdea({ uuid: ideaUuid, worldUuid: 'unsorted' }))
        dispatch(addIdeaToWorld({ ideaUuid: ideaUuid, worldUuid: 'unsorted' }))
      }
      navigation.navigate('Editor', { name: 'New Idea', uuid: ideaUuid, type: 'IDEA' })
    }
  }
  if (props.buttonTitle === 'Create Project') {
    pressHandler = () => {
      const projectUuid = `project.${uuid.v4()}`
      const worldUuid = `world.${uuid.v4()}`
      const sectionUuid = `section.${uuid.v4()}`
      const projectName = 'New Project'
      dispatch(setCurrentProjectUuid({ projectUuid: projectUuid }))
      dispatch(createProject({ projectUuid: projectUuid, worldUuid: worldUuid, name: 'New Project', sectionUuid: sectionUuid }))
      dispatch(setCurrentWorldUuid({ worldUuid: worldUuid }))
      dispatch(createWorld({ uuid: worldUuid, name: `World for ${projectName}` }))
      navigation.navigate('Project', {
        screen: 'Project Page',
        params: {
          name: 'New Project',
          uuid: projectUuid,
          type: 'PROJECT'
        }
      })
    }
  }
  // if (props.buttonTitle === 'Create World') {
  //     pressHandler = () => {
  //         const worldUuid = uuid.v4()
  //         dispatch(createProject({ uuid: `project.${projectUuid}`, worldUuid: 'unsorted' }))
  //         navigation.navigate('Editor', { name: 'New Project', uuid: `project.${projectUuid}`, type: 'PROJECT' })
  //     }
  // }
  return <AddButtonView pressHandler={pressHandler} {...props} />
}
