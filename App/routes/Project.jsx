import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Editor } from '../components/Editor'
import { Worlds } from '../pages/Worlds'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { AddButton } from '../components/AddButton'
import { useSelector } from 'react-redux'
const Tab = createMaterialTopTabNavigator()

export const Project = ({ route }) => {
  const worldUuid = useSelector(state => state.Projects.projectsData[route.params.params.uuid].worldUuid)
  return <>
    <Tab.Navigator>
      <Tab.Screen name='Project Page' component={Editor} />
      <Tab.Screen name='World of Project' component={() => <Worlds worldUuid={worldUuid} />} />
    </Tab.Navigator>
    <AddButton buttonTitle='Add Idea' projectUuid={route.params.params.uuid} />
  </>
}