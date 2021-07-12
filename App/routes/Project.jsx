import React from 'react'
import ProjectEditor from '../pages/Projects/containers/Editor'
import { Worlds } from '../pages/Worlds'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { AddButton } from '../components/AddButton'

const Tab = createMaterialTopTabNavigator()

export const Project = ({ route }) => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name='Project Page' component={ProjectEditor} />
        {/* <Tab.Screen name='World of Project' component={Worlds} /> */}
      </Tab.Navigator>
      {/* <AddButton buttonTitle='Add Idea' projectUuid={route.params.params.uuid} /> */}
    </>
  )
}
