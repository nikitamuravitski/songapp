import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Home } from '../pages/Home'
import ProjectsList from '../pages/Projects/containers/List'
import { Worlds } from '../pages/Worlds'
import { Ideas } from '../pages/Ideas'
import { Finished } from '../pages/Finished'
import { AddButton } from '../components/AddButton'

import { Image } from 'react-native'

const Tab = createMaterialTopTabNavigator()

const getButtonName = (currentRoute) => {
  let name = ''
  if (currentRoute === 'Home') name = 'Add Idea'
  if (currentRoute === 'Projects') name = 'Create Project'
  if (currentRoute === 'Worlds') name = 'Create World'
  if (currentRoute === 'Ideas') name = 'Add Idea'
  return name
}
export const Tabs = () => {
  const [isActive, setIsActive] = useState({
    firstGroup: false,
    secondGroup: false
  })
  const [selectedGroupValue, setSelectedGroupValue] = useState({
    firstGroup: {
      name: 'Projects',
      component: ProjectsList
    },
    secondGroup: {
      name: 'Ideas',
      component: Ideas
    }
  })

  const { state } = useRoute()
  let currentRoute = 'Home'
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
        <Tab.Screen name='Home' component={Home} />
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
                    name: 'Finished',
                    component: Finished
                  }
                })
              } else {
                setSelectedGroupValue({
                  ...selectedGroupValue,
                  firstGroup: {
                    name: 'Projects',
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
                    name: 'Worlds',
                    component: Worlds
                  }
                })
              } else {
                setSelectedGroupValue({
                  ...selectedGroupValue,
                  secondGroup: {
                    name: 'Ideas',
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
