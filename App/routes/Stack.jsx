import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Tabs } from './Tabs'
import { Editor } from '../components/Editor'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Main'

        >
            <Stack.Screen name='Main' component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen
                name='Editor'
                component={Editor}
                getId={({ params }) => params.uuid}
                options={({ route }) => ({
                    title: route.params.name
                })

                } />
        </Stack.Navigator>
    </NavigationContainer>
}