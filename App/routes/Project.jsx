import React from 'react'
import ProjectEditor from '../pages/Projects/containers/Editor'
import ProjectWorld from '../pages/Worlds/containers/ProjectWorld'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { AddButton } from '../components/AddButton'

const Tab = createMaterialTopTabNavigator()

export const Project = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name='Project Page' component={ProjectEditor} />
        <Tab.Screen name='World of Project' component={ProjectWorld} />
      </Tab.Navigator>
      {/* <AddButton buttonTitle='Add Idea' projectUuid={route.params.params.uuid} /> */}
    </>
  )
}
