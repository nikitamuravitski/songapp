import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Tabs } from './Tabs'
import { Project } from './Project'
import { Editor } from '../components/Editor'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Main'
      >
        <Stack.Screen name='Main' component={Tabs} options={{ headerShown: false }} />
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
          options={({ route }) => (
            {
              headerRight: () => <Text>Button</Text>,
              title: route.params.name
            })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
