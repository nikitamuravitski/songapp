import React from 'react'
import { AddButtonView } from './AddButtonView'
import { useNavigation } from '@react-navigation/native'
import { createIdea, setCurrentIdeaUuid } from '../../state/ideas'
import { createProject, setCurrentProjectUuid } from '../../state/projects'
import { addIdeaToWorld, createWorld, setCurrentWorldUuid } from '../../state/worlds'
import { createWorldForIdeas } from '../../state/ideas'
import { useDispatch, useSelector } from 'react-redux'
import 'react-native-get-random-values'
import uuid from 'react-native-uuid'

export const AddButtonContainer = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const projectData = useSelector(getProjectsData)

  let pressHandler
  if (props.buttonTitle === 'Add Idea') {
    pressHandler = () => {
      const ideaUuid = `idea.${uuid.v4()}`
      if (props.projectUuid) {
        const worldUuid = projectData[props.projectUuid].worldUuid
        dispatch(setCurrentIdeaUuid(ideaUuid))
        dispatch(createIdea({ uuid: ideaUuid, worldUuid: worldUuid }))
        dispatch(addIdeaToWorld({ ideaUuid: ideaUuid, worldUuid: worldUuid }))
      } else {
        dispatch(setCurrentIdeaUuid(ideaUuid))
        dispatch(createIdea({ uuid: ideaUuid, worldUuid: 'unsorted' }))
        dispatch(addIdeaToWorld({ ideaUuid: ideaUuid, worldUuid: 'unsorted' }))
      }
      navigation.navigate('Idea Editor', { name: 'New Idea', uuid: ideaUuid, type: 'IDEA' })
    }
  }
  if (props.buttonTitle === 'Create Project') {
    pressHandler = () => {
      const projectUuid = `project.${uuid.v4()}`
      const worldUuid = `world.${uuid.v4()}`
      const sectionUuid = `section.${uuid.v4()}`
      const versionUuid = `version.${uuid.v4()}`
      const projectName = 'New Project'
      dispatch(setCurrentProjectUuid(projectUuid))
      dispatch(createProject({ projectUuid, worldUuid, name: 'New Project', sectionUuid, versionUuid }))
      dispatch(setCurrentWorldUuid(worldUuid))
      dispatch(createWorld({ uuid: worldUuid, name: `World for ${projectName}` }))
      dispatch(createWorldForIdeas(worldUuid))
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
