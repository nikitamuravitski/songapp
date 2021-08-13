import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Tabs } from './Tabs'
import { Project } from './Project'
import { Editor } from '../components/Editor'
import IdeaEditor from '../pages/Ideas/containers/Editor'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { getCurrentProjectName } from '../state/projects'
import { useEffect } from 'react'
import ProjectMenu from './components/ProjectMenu'
import { MAIN, IDEA_EDITOR, EDITOR, PROJECT } from './routes'
const Stack = createStackNavigator()

export const StackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={MAIN}
      >
        <Stack.Screen name={MAIN} component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name={IDEA_EDITOR} component={IdeaEditor} />
        <Stack.Screen
          name={EDITOR}
          component={Editor}
          options={({ route }) => ({
            title: route.params.name
          })}
        />
        <Stack.Screen
          name={PROJECT}
          component={Project}
          options={({ route }) => {
            return {
              headerRight: () => <ProjectMenu />,
              title: route.params.name
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
