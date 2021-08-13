import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../pages/Home/containers/Home'
import ProjectsList from '../pages/Projects/containers/List'
import Worlds from '../pages/Worlds/containers/Worlds'
import Ideas from '../pages/Ideas/containers/List'
import { Finished } from '../pages/Finished'
import { AddButton } from '../components/AddButton'
import { HOME, PROJECTS, WORLDS, IDEAS, FINISHED } from './routes'

import { Image } from 'react-native'

const Tab = createMaterialTopTabNavigator()

const getButtonName = (currentRoute) => {
  let name = ''
  if (currentRoute === HOME) name = 'Add Idea'
  if (currentRoute === PROJECTS) name = 'Create Project'
  if (currentRoute === WORLDS) name = 'Create World'
  if (currentRoute === IDEAS) name = 'Add Idea'
  return name
}
export const Tabs = () => {
  const [isActive, setIsActive] = useState({
    firstGroup: false,
    secondGroup: false
  })
  const [selectedGroupValue, setSelectedGroupValue] = useState({
    firstGroup: {
      name: PROJECTS,
      component: ProjectsList
    },
    secondGroup: {
      name: IDEAS,
      component: Ideas
    }
  })

  const { state } = useRoute()
  let currentRoute = HOME
  let buttonTitle = ''
  if (state) currentRoute = state.routeNames[state.index]
  buttonTitle = getButtonName(currentRoute)

  return (
    <>
      <Tab.Navigator
        tabBarPosition='top'
        tabBarOptions={{
          showIcon: true,
          style: {
            paddingTop: 20
          }
        }}
      >
        <Tab.Screen name={HOME} component={Home} />
        <Tab.Screen
          name={selectedGroupValue.firstGroup.name}
          component={selectedGroupValue.firstGroup.component}
          listeners={{
            tabLongPress: () => {
              setIsActive({ ...isActive, firstGroup: !isActive.firstGroup })
              if (!isActive.firstGroup) {
                setSelectedGroupValue({
                  ...selectedGroupValue,
                  firstGroup: {
                    name: FINISHED,
                    component: Finished
                  }
                })
              } else {
                setSelectedGroupValue({
                  ...selectedGroupValue,
                  firstGroup: {
                    name: PROJECTS,
                    component: ProjectsList
                  }
                })
              }
            }
          }}
          options={{
            tabBarIcon: () => (
              <Image source={require('../assets/touch-and-hold.png')} style={{ width: 20, height: 20 }} />
            )
          }}
        />

        <Tab.Screen
          name={selectedGroupValue.secondGroup.name}
          component={selectedGroupValue.secondGroup.component}
          listeners={{

            tabLongPress: () => {
              setIsActive({ ...isActive, secondGroup: !isActive.secondGroup })
              if (!isActive.secondGroup) {
                setSelectedGroupValue({
                  ...selectedGroupValue,
                  secondGroup: {
                    name: WORLDS,
                    component: Worlds
                  }
                })
              } else {
                setSelectedGroupValue({
                  ...selectedGroupValue,
                  secondGroup: {
                    name: IDEAS,
                    component: Ideas
                  }
                })
              }
            }
          }}
          options={{
            tabBarIcon: () => (
              <Image source={require('../assets/touch-and-hold.png')} style={{ width: 20, height: 20 }} />
            )
          }}
        />
      </Tab.Navigator>
      <AddButton buttonTitle={buttonTitle} />
    </>
  )
}
