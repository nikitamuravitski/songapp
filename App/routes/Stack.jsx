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

const Stack = createStackNavigator()

export const StackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Main'
      >
        <Stack.Screen name='Main' component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name='Idea Editor' component={IdeaEditor} />
        <Stack.Screen
          name='Editor'
          component={Editor}
          options={({ route }) => ({
            title: route.params.name
          })}
        />
        <Stack.Screen
          name='Project'
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
