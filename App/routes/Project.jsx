import React from 'react'
import ProjectEditor from '../pages/Projects/containers/Editor'
import ProjectWorld from '../pages/Worlds/containers/ProjectWorld'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { AddButton } from '../components/AddButton'
import { PROJECT_PAGE, WORLD_OF_PROJECT } from './routes'
const Tab = createMaterialTopTabNavigator()

export const Project = () => {
  return <>
    <Tab.Navigator>
      <Tab.Screen name={PROJECT_PAGE} component={ProjectEditor} />
      <Tab.Screen name={WORLD_OF_PROJECT} component={ProjectWorld} />
    </Tab.Navigator>
    {/* <AddButton buttonTitle='Add Idea' projectUuid={route.params.params.uuid} /> */}
  </>
}
