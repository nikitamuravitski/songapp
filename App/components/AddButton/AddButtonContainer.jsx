import React from 'react'
import { AddButtonView } from './AddButtonView'
import { useNavigation, useRoute } from '@react-navigation/native'
import { createIdea, setCurrentIdeaUuid } from '../../state/ideas'
import { createProject, getProjectsData, setCurrentProjectUuid } from '../../state/projects'
import { addIdeaToWorld, createWorld, getCurrentWorldUuid, setCurrentWorldUuid } from '../../state/worlds'
import { createWorldForIdeas } from '../../state/ideas'
import { useDispatch, useSelector } from 'react-redux'
import 'react-native-get-random-values'
import uuid from 'react-native-uuid'
import { IDEA_EDITOR, MAIN, PROJECT, PROJECT_PAGE } from '../../routes/routes'
export const AddButtonContainer = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const route = useRoute()
  // const projectData = useSelector(getProjectsData)
  let worldUuid = useSelector(getCurrentWorldUuid)

  let pressHandler
  if (props.buttonTitle === 'Add Idea') {
    pressHandler = () => {
      const ideaUuid = `idea.${uuid.v4()}`
      if (route.name === MAIN) worldUuid = 'unsorted'
      if (worldUuid === null) worldUuid = 'unsorted'
      dispatch(setCurrentIdeaUuid(ideaUuid))
      dispatch(createIdea({ uuid: ideaUuid, worldUuid }))
      dispatch(addIdeaToWorld({ ideaUuid, worldUuid }))
      navigation.navigate(IDEA_EDITOR, { name: 'New Idea', worldUuid })
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
      navigation.navigate(PROJECT, {
        screen: PROJECT_PAGE,
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
